let express=require('express')
let model=require('./model')

let router=express.Router()

//---Get All---

router.get('/',(request,response)=>{
	model.getAll((error,data)=>{
	if (error) {
      console.log("Get all personas failed", error);
      response.sendStatus(500)
    }
    else response.status(200).json({
    		"personas":data
    	})
	})
})

//--Get all info on one---

router.get('/:name',(request,response,next)=>{
	let personaName=[request.params.name]
	model.findInfo(personaName,(error,data)=>{
		if (error) {
	     	console.log("Get one persona failed", error);
	     	response.sendStatus(500)
	    }
	    else {
	  		let foundInfo=data
		    model.findEle(personaName,(error,data)=>{
		    	if (error) {
		    		console.log("Get one persona elementals failed", error);
		     		response.sendStatus(500)
			   	}
			    else {
			    	let foundEle=data
				    model.findStats(personaName,(error,data)=>{
				    	if (error) {
				    		console.log("Get one persona stats failed", error);
				     		response.sendStatus(500)
					   	}
					    else {
					    	let foundStats=data
						    model.findSkills(personaName,(error,data)=>{
								if (error) {
							    	console.log("Get one persona skills failed", error);
							    	response.sendStatus(500)
							    }
							    else {
							    	let foundSkills=data
							    	response.status(200).json({
							    		"name":foundInfo.name,
							    		"arcana":foundInfo.arcana,
							    		"stats":[foundStats],
							    		"elementals":[foundEle],
							    		"skills":foundSkills
							    	})
							    }
							})
						}
					})
				}
			})
		}
	})
})

//---Create---

router.post('/',(request,response)=>{
	let newInfo=[request.body.name, request.body.arcana]
	let newStats=Object.values(request.body.stats[0])
	let newEle=Object.values(request.body.elementals[0])
	let newSkills=[]
	for (i=0;i<request.body.skills.length;i++){
		newSkills.push(request.body.skills[i].name)
	}
	model.createInfo(newInfo,error=>{
		if (error) {
	     	console.log("Create new persona failed", error);
	    	response.sendStatus(500)
	    }
	    else {
		    model.findOid(newInfo[0],(error,data)=>{
		    	if (error) {
		     		console.log("Find new persona failed", error);
		    		response.sendStatus(500)
		    	}
		    	else {
		    		let newOID=data.rowid
		    		newStats.unshift(newOID)
			    	model.createStats(newStats,error=>{
				    	if (error) {
				    		console.log("Create new persona stats failed", error);
				    		response.sendStatus(500)
				  		}
				  		else {
				  			newEle.unshift(newOID)
				  			model.createEle(newEle,error=>{
						    	if (error) {
						    		console.log("Create new persona elementals failed", error);
						    		response.sendStatus(500)
						  		}
						  		else {
						  			for (let skill of newSkills){
							  			model.findSkillOid([skill],(error,data)=>{
									    	if (error) {
									    		console.log("Find new skills oid failed", error);
									    		response.sendStatus(500)
									  		}
									  		else {
									  			let newSkillOID=data.rowid
									  			let newSkillLink=[newOID,newSkillOID]
							  					model.linkSkill(newSkillLink,error=>{
							  						if (error) {
									    				console.log("Link new skill failed", error);
									    				response.sendStatus(500)
									  				}		
							  					})
							  				}
						  				})
							  		}
							  		response.sendStatus(200)
						  		}
						    })
				  		}
				    })
			    }
		    })
		}
	})
})

//---Put---

router.put('/:name',(request,response)=>{
	let personaToChange=[request.params.name]
	let newInfo=[request.body.name, request.body.arcana]
	let newStats=Object.values(request.body.stats[0])
	let newEle=Object.values(request.body.elementals[0])
	let newSkills=[]
	for (i=0;i<request.body.skills.length;i++){
		newSkills.push(request.body.skills[i].name)
	}
	model.findOid(personaToChange,(error,data)=>{
		if (error) {
	      	console.log("Find oid of persona failed", error);
	      	response.sendStatus(500)
	    }
	    else {
	    	let oidToChange=data.rowid
	    	newInfo.push(oidToChange)
	    	model.updateInfo(newInfo,error=>{
	    		if (error) {
			     	console.log("Update persona info and arcana failed", error);
			    	response.sendStatus(500)
			    }
			    else {
			    	newStats.push(oidToChange)
			    	model.updateStats(newStats,error=>{
			    		if (error) {
					     	console.log("Update persona stats failed", error);
					    	response.sendStatus(500)
					    }
					    else {
					    	newEle.push(oidToChange)
					    	model.updateEle(newEle,error=>{
					    		if (error) {
							     	console.log("Update persona elementals failed", error);
							    	response.sendStatus(500)
							    }
							    else {
							    	model.findP_SRow(oidToChange,(error,data)=>{
							    		if (error) {
									     	console.log("Find personas_skills data failed", error);
									    	response.sendStatus(500)
									    }
									    else {
									    	let oldSkillsArr=data
											for (let i=0;i<newSkills.length;i++){
									  			model.findSkillOid([newSkills[i]],(error,data)=>{
											    	if (error) {
											    		console.log("Find new skills oid failed", error);
											    		response.sendStatus(500)
											  		}
											  		else {
											  			let newSkillId=data.rowid
											  			let updateSkillLink=Object.values(oldSkillsArr[i])
											  			updateSkillLink.unshift(newSkillId)
											  			console.log(updateSkillLink)
									  					model.updateSkills(updateSkillLink,error=>{
									  						if (error) {
											    				console.log("Update skill link failed", error);
											    				response.sendStatus(500)
											  				}		
									  					})
									  				}
								  				})
									  		}
								  		response.sendStatus(200)
								  		}
							  		})
								}
							})
					    }
			    	})
			    }
	    	})
	    }
	})
})

//---Delete Persona and all relations---

router.delete('/:name',(request,response)=>{
	let toDelete=[request.params.name]
	model.findOid(toDelete,(error,data)=>{
		if (error) {
			      console.log("Find persona oid failed", error);
			      response.sendStatus(500)
			    }
		else{
			let toDeleteOid=[data.rowid]
			model.deletePersona(toDelete,error=>{
				if (error) {
			      console.log("Create delete persona failed", error);
			      response.sendStatus(500)
			    }
			    else{
			    	model.deleteStats(toDeleteOid,error=>{
			    		if (error) {
					      console.log("Create delete persona failed", error);
					      response.sendStatus(500)
					    }
					    else{
					    	model.deleteEle(toDeleteOid,error=>{
					    		if (error) {
							      console.log("Create delete persona failed", error);
							      response.sendStatus(500)
							    }
							    else{
							    	model.deleteSkills(toDeleteOid,error=>{
							    		if (error) {
									      console.log("Create delete persona failed", error);
									      response.sendStatus(500)
									    }
									    else{
									    	response.sendStatus(200)
									    }
							    	})
							    }
					    	})
					    }
			    	})
			    }
			})
		}
	})
})

module.exports=router