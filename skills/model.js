const database=require('../database')

function getAll(callback){
	let getAllQuery=`
	SELECT * FROM skills`
	database.all(getAllQuery,callback)
}

function createSkill(body,callback){
	let createSkillQuery=`
	INSERT INTO skills VALUES (?,?,?,?,?)`
	database.run(createSkillQuery,[body.name, body.type, body.effect, body.cost, body.cost_type],callback)
}

module.exports={
	getAll,createSkill
}