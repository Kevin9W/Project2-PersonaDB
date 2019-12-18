const database=require('../database')

//---Finding---

function getAll(callback){
	let getAllQuery=`
	SELECT personas.name, personas.arcana FROM personas`
	database.all(getAllQuery,callback)
}

function findInfo(name,callback){
	let getInfoQuery=`
	SELECT personas.name, personas.arcana FROM personas 
	WHERE personas.name=?`
	database.get(getInfoQuery,name,callback)
}
function findSkills(name,callback){
	let getSkillsQuery=`
	SELECT skills.name AS "name", skills.type FROM personas 
	JOIN personas_skills ON personas.oid=persona_id
	JOIN skills ON skills.oid=skills_id
	WHERE personas.name=?`
	database.all(getSkillsQuery,name,callback)
}
function findStats(name,callback){
	let getStatsQuery=`
	SELECT strength, magic, endurance, agility, luck FROM stats 
	JOIN personas ON personas.oid=persona_id
	WHERE personas.name=?`
	database.get(getStatsQuery,name,callback)
}
function findEle(name,callback){
	let getEleQuery=`
	SELECT physical,gun,fire,ice,electric,wind,psychic,nuclear,curse,bless FROM elementals 
	JOIN personas ON personas.oid=persona_id
	WHERE personas.name=?`
	database.get(getEleQuery,name,callback)
}

//---Creating---

function createInfo(body,callback){
	let createInfoQuery=`
	INSERT INTO personas VALUES (?,?)`
	database.run(createInfoQuery,body,callback)
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
	database.get(findOidQuery,name,callback) 
}

function findSkillOid(skill,callback){
	let findSkillQuery=`
	SELECT skills.oid FROM skills
	WHERE skills.name=?`
	database.get(findSkillQuery,skill,callback)
}

function linkSkill(skill,callback){
	let linkSkillsQuery=`
	INSERT INTO personas_skills VALUES (?, ?)`
	database.run(linkSkillsQuery,skill,callback)
}
//---Updating--
function updateInfo(body,callback){
	let updateInfoQuery=`
	UPDATE personas
	SET name=?, arcana=?
	WHERE personas.oid=?`
	database.run(updateInfoQuery,body,callback)
}

function updateStats(body,callback){
	let updateStatsQuery=`
	UPDATE stats
	SET strength=?, magic=?, endurance=?, agility=?, luck=?
	WHERE persona_id=?`
	database.run(updateStatsQuery,body,callback)
}

function updateEle(body,callback){
	let updateElementalsQuery=`
	UPDATE elementals
	SET physical=?, gun=?,fire=?, ice=?, electric=?, wind=?, psychic=?, nuclear=?, curse=?, bless=?
	WHERE persona_id=?`
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
	DELETE FROM personas
	WHERE personas.name=?`
	database.run(deletePersonaQuery,name,callback)
}
function deleteStats(id,callback){
	let deleteStatsQuery=`
	DELETE FROM stats
	WHERE persona_id=?`
	database.run(deleteStatsQuery,id,callback)
}
function deleteEle(id,callback){
	let deleteEleQuery=`
	DELETE FROM elementals
	WHERE persona_id=?`
	database.run(deleteEleQuery,id,callback)
}
function deleteSkillsRelations(id,callback){
	let deleteSkillsQuery=`
	DELETE FROM personas_skills
	WHERE persona_id=?`
	database.run(deleteSkillsQuery,id,callback)
}

function deleteFromStock(id,callback){
	let deleteFromStockQuery=`
	DELETE FROM stock
	WHERE persona_id=?`
	database.run(deleteFromStockQuery,id,callback)

}

//---Exports---

module.exports={
	getAll, findInfo, findSkills, findStats, findEle,
	createInfo, createStats,createEle, findOid, findSkillOid, linkSkill,
	updateInfo, updateStats, updateEle, updateSkills, findP_SRow,
	deletePersona, deleteStats, deleteEle, deleteSkillsRelations, deleteFromStock
}














