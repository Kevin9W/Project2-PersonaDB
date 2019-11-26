const database=require('../database')

function getAll(callback){
	let getAllQuery=`
	SELECT * FROM skills`
	database.all(getAllQuery,callback)
}

function getOne(name,callback){
	let getOneQuery=`
	SELECT * FROM skills
	WHERE skills.name=?`
	database.get(getOneQuery,name,callback)
}

function createSkill(body,callback){
	let createSkillQuery=`
	INSERT INTO skills VALUES (?,?,?,?,?)`
	database.run(createSkillQuery,body,callback)
}

function findSkillOid(skill,callback){
	let findSkillQuery=`
	SELECT skills.oid FROM skills
	WHERE skills.name=?`
	database.get(findSkillQuery,skill,callback)
}

function updateSkill(body,callback){
	let updateSkillQuery=`
	UPDATE skills
	SET name=?, type=?, effect=?, cost=?, cost_type=?
	WHERE skills.oid=?`
	database.run(updateSkillQuery,body,callback)
}

function deleteSkill(name,callback){
	let deleteSkillQuery=`
	DELETE FROM skills
	WHERE skills.name=?`
	database.run(deleteSkillQuery,name,callback)
}

module.exports={
	getAll, getOne, createSkill, findSkillOid, updateSkill, deleteSkill
}