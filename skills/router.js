let express=require('express')
let model=require('./model')

let router=express.Router()

//---Get all skills--

router.get('/',(request,response)=>{
	model.getAll((error,data)=>{
		if (error) {
	      console.log("Get all skills failed", error);
	      response.sendStatus(500)
	    }
	    else response.status(200).json({
	    	"skills":data
	    })
	})
})

//---Get one skill---

router.get('/:name',(request,response)=>{
	let skillName=[request.params.name]
	model.getOne(skillName,(error,data)=>{
		if (error) {
	      	console.log("Get one skill failed", error);
	      	response.sendStatus(500)
	    }
	    else response.status(200).json(data)
	})
})

//---Get personas using skill---

router.get('/:name/personas',(request,response)=>{
	let skillName=[request.params.name]
	model.getPersonas(skillName,(error,data)=>{
		if (error) {
	      	console.log("Get personas failed", error);
	      	response.sendStatus(500)
	    }
	    else response.status(200).json({
	    	"personas":data
	    })
	})
})

//---Create a new skill---

router.post('/',(request,response)=>{
	let newSkill=Object.values(request.body)
	model.createSkill(newSkill,(error)=>{
		if (error) {
	    	console.log("Create skill failed", error);
	    	response.sendStatus(500)
	    }
	    else response.sendStatus(200)
	})
})

//---Update a skill---

router.put('/:name',(request,response)=>{
	let updateSkillName=[request.params.name]
	let updateSkillBody=Object.values(request.body)
	model.getSkillOid(updateSkillName,(error,data)=>{
		if (error) {
	        console.log("Find skill oid failed", error);
	        response.sendStatus(500)
	    }
		else {
			let skillOid=data.rowid
			updateSkillBody.push(skillOid)
			model.updateSkill(updateSkillBody,error=>{
				if (error) {
			    	console.log("Update skill failed", error);
			      	response.sendStatus(500)
			    }
			    else response.sendStatus(200)
			})	
		}	
	})
})

//---Delete a skill---

router.delete('/:name',(request,response)=>{
	let skillName=[request.params.name]
	model.getSkillOid(skillName,(error,data)=>{
		if (error) {
	      	console.log("Find skill id failed", error);
	      	response.sendStatus(500)
	    }
	    else {	
  	    	let skillOid=[data.rowid]
			model.deleteSkill(skillName,error=>{
				if (error) {
			      	console.log("Delete skill failed", error);
			      	response.sendStatus(500)
			    }
			    else {   	
			    	model.deleteSkillLink(skillOid,error=>{
			    		if (error) {
					      	console.log("Delete skill link failed", error);
					      	response.sendStatus(500)
					    }
					    else {
					    	response.sendStatus(200)
					    }
			    	})
			    }
	    	})
	    }
	})
})

module.exports=router