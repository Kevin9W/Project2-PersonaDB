let express=require('express')
let model=require('./model')

let router=express.Router()

//---Get all persona elementals---

router.get('/',(request,response)=>{
	model.getAll((error,data)=>{
		if (error) {
	    	console.log("Get all persona elementals failed", error);
	    	response.sendStatus(500)
	    }
	    else response.status(200).json({
	    	"personas":data
	    })
	})
})

module.exports=router