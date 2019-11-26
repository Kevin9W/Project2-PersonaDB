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
    else response.status(200).json(data)
	})
})

//--Get all info on one---

router.get('/:name',(request,response)=>{
	let personaName=request.params.name
	let foundName
	let foundSkills
	let foundStats
	let foundEle
	model.findName(personaName,(error,data)=>{
		if (error) {
	     	console.log("Get one persona failed", error);
	     	response.sendStatus(500)
	    }
	    else {
	  		foundName=data
		    model.findEle(personaName,(error,data)=>{
		    	if (error) {
		    		console.log("Get one persona elementals failed", error);
		     		response.sendStatus(500)
			   	}
			    else {
			    	foundEle=data
				    model.findStats(personaName,(error,data)=>{
				    	if (error) {
				    		console.log("Get one persona stats failed", error);
				     		response.sendStatus(500)
					   	}
					    else {
					    	foundStats=data
						    model.findSkills(personaName,(error,data)=>{
								if (error) {
							    	console.log("Get one persona skills failed", error);
							    	response.sendStatus(500)
							    }
							    else {
							    	data.unshift(foundEle)
							    	data.unshift(foundStats)
							    	data.unshift(foundName)
							    	response.status(200).json(data)
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
	let newName=Object.values(request.body[0])
	let newStats=Object.values(request.body[1])
	let newEle=Object.values(request.body[2])
	let newSkills=[]
	for (i=3;i<request.body.length;i++){
		newSkills.push(Object.values(request.body[i])[0])
	}
	model.createName(newName,error=>{
		if (error) {
	     	console.log("Create new persona failed", error);
	    	response.sendStatus(500)
	    }
	    else {
		    model.findOid(newName,(error,data)=>{
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
							  			model.findSkillOid(skill,(error,data)=>{
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
	let newName=Object.values(request.body[0])
	let newStats=Object.values(request.body[1])
	let newEle=Object.values(request.body[2])
	let newSkills=[]
	for (i=3;i<request.body.length;i++){
		newSkills.push(Object.values(request.body[i])[0])
	}
	model.findOid(personaToChange,(error,data)=>{
		if (error) {
	      	console.log("Find oid of persona failed", error);
	      	response.sendStatus(500)
	    }
	    else {
	    	let oidToChange=data.rowid
	    	newName.push(oidToChange)
	    	model.updateName(newName,error=>{
	    		if (error) {
			     	console.log("Update persona name and arcana failed", error);
			    	response.sendStatus(500)
			    }
			    else {
			    	newStats.unshift(oidToChange)
			    	model.updateStats(newStats,error=>{
			    		if (error) {
					     	console.log("Update persona stats failed", error);
					    	response.sendStatus(500)
					    }
					    else {
					    	newEle.unshift(oidToChange)
					    	model.updateEle(newEle,error=>{
					    		if (error) {
							     	console.log("Update persona elementals failed", error);
							    	response.sendStatus(500)
							    }
							    else {
							    	model.findP_SRow(oidToChange,(error,data)=>{
							    		if (error) {
									     	console.log("Update persona elementals failed", error);
									    	response.sendStatus(500)
									    }
									    else {
									    	let oldSkillsArr=data
											for (let i=0;i<newSkills.length;i++){
									  			model.findSkillOid(newSkills[i],(error,data)=>{
											    	if (error) {
											    		console.log("Find new skills oid failed", error);
											    		response.sendStatus(500)
											  		}
											  		else {
											  			let newSkillId=[data.rowid]
											  			let updateSkillLink=Object.values(oldSkillsArr[i])
											  			newSkillId.push(updateSkillLink)
									  					model.linkSkill(newSkillId,error=>{
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

//---Delete---

router.delete('/:name',(request,response)=>{
	let toDelete=request.params.name
	model.deletePersona(toDelete,error=>{
		if (error) {
	      console.log("Create delete persona failed", error);
	      response.sendStatus(500)
	    }
	    else response.sendStatus(200)
	})
})





module.exports=router