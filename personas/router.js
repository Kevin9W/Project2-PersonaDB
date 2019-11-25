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
	    }			
	    model.findElementals(personaName,(error,data)=>{
	    	if (error) {
	    		console.log("Get one persona elementals failed", error);
	     		response.sendStatus(500)
		   	}
		    else {
		    	foundEle=data
		    }
		    model.findStats(personaName,(error,data)=>{
		    	if (error) {
		    		console.log("Get one persona stats failed", error);
		     		response.sendStatus(500)
			   	}
			    else {
			    	foundStats=data
			    }
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
			})
		})
	})
})

//---Create---

router.post('/',(request,response)=>{
	let newPersona=request.body
	model.createPersona(newPersona,error=>{
		if (error) {
	      console.log("Create new persona failed", error);
	      response.sendStatus(500)
	    }
	    else response.sendStatus(200)
	})
})

//---Put---

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