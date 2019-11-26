let express=require('express')
let model=require('./model')

let router=express.Router()

router.get('/',(request,response)=>{
	model.getAll((error,data)=>{
		if (error) {
	      console.log("Get all skills failed", error);
	      response.sendStatus(500)
	    }
	    else response.status(200).json(data)
	})
})

router.post('/',(request,response)=>{
	model.createSkill(request.body,(error)=>{
		if (error) {
	      console.log("Create skill failed", error);
	      response.sendStatus(500)
	    }
	    else response.sendStatus(200)
	})
})

module.exports=router