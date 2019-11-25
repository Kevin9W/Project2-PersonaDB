const database=require('../database')


function createPersona(body,callback){
	let createPersonaQuery=`
	INSERT INTO personas VALUES (?,?)`
	database.run(createPersona,[body[0].name,body[0].arcana],callback)
}

function deletePersona(name,callback){
	let deletePersonaQuery=`
	DELETE FROM personas WHERE personas.name= ?`
	database.run(deletePersonaQuery,[name],callback)
}

function getAll(callback){
	let getAllQuery=`
	Select personas.name, personas.arcana FROM personas`
	database.all(getAllQuery,callback)
}

function findName(name,callback){
	let getNameQuery=`
	Select personas.name, personas.arcana FROM personas 
	WHERE personas.name=?`
	database.get(getNameQuery,[name],callback)
}
function findSkills(name,callback){
	let getSkillsQuery=`
	Select skills.name FROM personas 
	JOIN personas_skills ON personas.oid=persona_id
	JOIN skills ON skills.oid=skills_id
	WHERE personas.name=?`
	database.all(getSkillsQuery,[name],callback)
}
function findStats(name,callback){
	let getStatsQuery=`
	Select strength, magic, endurance, agility, luck FROM stats 
	JOIN personas ON personas.oid=persona_id
	WHERE personas.name=?`
	database.get(getStatsQuery,[name],callback)
}
function findElementals(name,callback){
	let getEleQuery=`
	Select physical,gun,fire,ice,electric,wind,psychic,nuclear,curse,bless FROM elementals 
	JOIN personas ON personas.oid=persona_id
	WHERE personas.name=?`
	database.get(getEleQuery,[name],callback)
}

module.exports={createPersona, deletePersona, getAll, findName, findSkills, findStats, findElementals}