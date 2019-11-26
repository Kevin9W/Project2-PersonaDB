const database=require('../database')

function getAll(callback){
	let getAllQuery=`
	SELECT name, arcana, strength, magic, endurance, agility, luck FROM stats
	JOIN personas ON personas.oid=persona_id`
	database.all(getAllQuery,callback)
}

module.exports={
	getAll
}