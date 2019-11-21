let sqlite3=require('sqlite3')
let database = new sqlite3.Database('./database.db')

const createPersonasTableQuery = "CREATE TABLE IF NOT EXISTS personas (name TEXT, arcana TEXT)"
const createSkillsTableQuery = "CREATE TABLE IF NOT EXISTS skills (name TEXT, type TEXT, effect TEXT, cost INTERGER, cost_type TEXT)"
const createPersonasSkillsTableQuery="CREATE TABLE IF NOT EXISTS personas_skills (persona_id INTERGER, skill_1_id INTERGER, skill_2_id INTERGER, skill_3_id INTERGER, skill_4_id INTERGER, skill_5_id INTERGER, skill_6_id INTERGER, skill_7_id INTERGER, skill_8_id INTERGER)"
const createStatsTableQuery="CREATE TABLE IF NOT EXISTS stats (persona_id, strength INTERGER, magic INTERGER, endurance INTERGER, agility INTERGER, luck INTERGER)"
const createElementalsTableQuery="CREATE TABLE IF NOT EXISTS elementals (persona_id INTERGER, physical TEXT, gun TEXT, fire TEXT, ice TEXT, electric TEXT, wind TEXT, psychic TEXT, nuclear TEXT, bless TEXT, curse TEXT)"

database.run(createPersonasTableQuery, error => {
  if (error) {
  	console.error(new Error("Create persona table failed."), error);
	}  
  else {
  	console.log("Create persona table succeeded");
  }
});

database.run(createSkillsTableQuery, error => {
  if (error) {
  	console.error(new Error("Create skills table failed."), error);
	}  
  else {
  	console.log("Create skills table succeeded");
  }
});

database.run(createPersonasSkillsTableQuery, error => {
  if (error) {
  	console.error(new Error("Create personas_skills table failed."), error);
	}  
  else {
  	console.log("Create persona_skills table succeeded");
  }
});

database.run(createStatsTableQuery, error => {
  if (error) {
  	console.error(new Error("Create stats table failed."), error);
	}  
  else {
  	console.log("Create stats table succeeded");
  }
});

database.run(createElementalsTableQuery, error => {
  if (error) {
  	console.error(new Error("Create elementals table failed."), error);
	}  
  else {
  	console.log("Create elementals table succeeded");
  }
});


module.exports = database;