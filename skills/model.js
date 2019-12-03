const database=require('../database')

//---Find---

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

function getSkillOid(skill,callback){
	let getSkillQuery=`
	SELECT skills.oid FROM skills
	WHERE skills.name=?`
	database.get(getSkillQuery,skill,callback)
}

function getPersonas(skill,callback){
	let getPersonasQuery=`
	SELECT personas.name, personas.arcana FROM personas_skills
	JOIN personas ON personas.oid=persona_id
	JOIN skills ON skills.oid=skills_id
	WHERE skills.name=?`
	database.all(getPersonasQuery,skill,callback)
}

//---Create---

function createSkill(body,callback){
	let createSkillQuery=`
	INSERT INTO skills VALUES (?,?,?,?,?)`
	database.run(createSkillQuery,body,callback)
}

//---Update---

function updateSkill(body,callback){
	let updateSkillQuery=`
	UPDATE skills
	SET name=?, type=?, effect=?, cost=?, cost_type=?
	WHERE skills.oid=?`
	database.run(updateSkillQuery,body,callback)
}

//---Delete---

function deleteSkill(name,callback){
	let deleteSkillQuery=`
	DELETE FROM skills
	WHERE skills.name=?`
	database.run(deleteSkillQuery,name,callback)
}

function deleteSkillLink(id,callback){
	let deleteSkillLinkQuery=`
	DELETE FROM personas_skills
	WHERE skills_id=?`
	database.run(deleteSkillLinkQuery,id,callback)
}

module.exports={
	getAll, getOne, getPersonas, getSkillOid,
	createSkill, updateSkill, deleteSkill, deleteSkillLink
}