const database=require('../database')

function getAll(callback){
	let getAllQuery=`
	SELECT name, arcana, physical, gun, fire, ice, electric, wind, psychic, nuclear, curse, bless FROM elementals 
	JOIN personas ON personas.oid=persona_id`
	database.all(getAllQuery,callback)
}

module.exports={
	getAll
}