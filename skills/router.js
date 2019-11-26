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
	    else response.status(200).json(data)
	})
})

//--Get one skill

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
	model.findSkillOid(updateSkillName,(error,data)=>{
		if (error) {
	        console.log("Find skill oid failed", error);
	        response.sendStatus(500)
	    }
		else {
			let oidToChange=data.rowid
			updateSkillBody.push(oidToChange)
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
	model.deleteSkill(skillName,error=>{
		if (error) {
	      console.log("Delete skill failed", error);
	      response.sendStatus(500)
	    }
	    else response.sendStatus(200)
	})
})

module.exports=router