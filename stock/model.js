const database=require('../database')

function getStock(id,callback){
	let getAllQuery=`
	SELECT name, arcana FROM stock
	JOIN personas ON personas.oid=persona_id
	WHERE stock_id=?`
	database.all(getAllQuery,id,callback)
}

module.exports={
	getStock
}