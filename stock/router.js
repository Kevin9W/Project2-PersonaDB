let express=require('express')
let model=require('./model')

let router=express.Router()

//---Get stats for all personas

router.get('/:id',(request,response)=>{
	let stockId=request.paramas.id
	model.getStock(stockId,(error,data)=>{
		if (error) {
	    	console.log("Get stock failed", error);
	    	response.sendStatus(500)
	    }
	    else response.status(200).json({
	    	"stock":data
	    })
	})
})

module.exports=router