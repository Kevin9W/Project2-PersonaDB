const database=require('../database')

//---Creating---

function createName(body,callback){
	let createNameQuery=`
	INSERT INTO personas VALUES (?,?)`
	database.run(createNameQuery,body,callback)
}	

function createStats(stats,callback){
	let createStatsQuery=`
	INSERT INTO stats VALUES (?,?,?,?,?,?)`
	database.run(createStatsQuery,stats,callback)
}

function createEle(stats,callback){
	let createEleQuery=`
	INSERT INTO elementals VALUES (?,?,?,?,?,?,?,?,?,?,?)`
	database.run(createEleQuery,stats,callback)
}

function findOid(name,callback){
	let findOidQuery=`
	SELECT personas.oid FROM personas
	WHERE personas.name=?`
	database.get(findOidQuery,name[0],callback) 
}

function findSkillOid(skill,callback){
	let findSkillQuery=`
	SELECT skills.oid FROM skills
	WHERE skills.name=?`
	database.get(findSkillQuery,[skill],callback)
}

function linkSkill(skill,callback){
	let linkSkillsQuery=`
	INSERT INTO personas_skills VALUES (?, ?)`
	database.run(linkSkillsQuery,skill,callback)
}
//---Updating--
function updateName(body,callback){
	let updateNameQuery=`
	UPDATE personas
	SET name=?, arcana=?
	WHERE personas.oid=?`
	database.run(updateNameQuery,body,callback)
}

function updateStats(body,callback){
	let updateStatsQuery=`
	UPDATE stats
	SET persona_id=?, strength=?, magic=?, endurance=?, agility=?, luck=?`
	database.run(updateStatsQuery,body,callback)
}

function updateEle(body,callback){
	let updateElementalsQuery=`
	UPDATE elementals
	SET persona_id=?, physical=?, gun=?,fire=?, ice=?, electric=?, wind=?, psychic=?, nuclear=?, curse=?, bless=?`
	database.run(updateElementalsQuery,body,callback)
}
function findP_SRow(body,callback){
	let findSkillsIdQuery=`
	SELECT persona_id, skills_id FROM personas_skills
	WHERE persona_id=?`
	database.all(findSkillsIdQuery,body,callback)
}

function updateSkills(body,callback){
	let updateSkillsQuery=`
	UPDATE personas_skills
	SET skills_id=?
	WHERE persona_id=? AND skills_id=?`
	database.run(updateSkillsQuery,body,callback)
}

//---Deleting---

function deletePersona(name,callback){
	let deletePersonaQuery=`
	DELETE FROM personas WHERE personas.name=?`
	database.run(deletePersonaQuery,name[0],callback)
}

//---Finding---

function getAll(callback){
	let getAllQuery=`
	SELECT personas.name, personas.arcana FROM personas`
	database.all(getAllQuery,callback)
}

function findName(name,callback){
	let getNameQuery=`
	SELECT personas.name, personas.arcana FROM personas 
	WHERE personas.name=?`
	database.get(getNameQuery,[name],callback)
}
function findSkills(name,callback){
	let getSkillsQuery=`
	SELECT skills.name FROM personas 
	JOIN personas_skills ON personas.oid=persona_id
	JOIN skills ON skills.oid=skills_id
	WHERE personas.name=?`
	database.all(getSkillsQuery,[name],callback)
}
function findStats(name,callback){
	let getStatsQuery=`
	SELECT strength, magic, endurance, agility, luck FROM stats 
	JOIN personas ON personas.oid=persona_id
	WHERE personas.name=?`
	database.get(getStatsQuery,[name],callback)
}
function findEle(name,callback){
	let getEleQuery=`
	SELECT physical,gun,fire,ice,electric,wind,psychic,nuclear,curse,bless FROM elementals 
	JOIN personas ON personas.oid=persona_id
	WHERE personas.name=?`
	database.get(getEleQuery,[name],callback)
}

module.exports={
	getAll, deletePersona,
	findName, findSkills, findStats, findEle,
	createName, createStats,createEle, findOid, findSkillOid, linkSkill,
	updateName, updateStats, updateEle, updateSkills, findP_SRow
}














