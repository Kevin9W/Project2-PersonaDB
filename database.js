let sqlite3=require('sqlite3')
let database = new sqlite3.Database('./database.db')
//---Create table queries---
const createPersonasTableQuery = "CREATE TABLE IF NOT EXISTS personas (name TEXT, arcana TEXT)"
const createSkillsTableQuery = "CREATE TABLE IF NOT EXISTS skills (name TEXT, type TEXT, effect TEXT, cost INTEGER, cost_type TEXT)"
const createPersonasSkillsTableQuery="CREATE TABLE IF NOT EXISTS personas_skills (persona_id INTEGER, skills_id INTEGER)"
const createStatsTableQuery="CREATE TABLE IF NOT EXISTS stats (persona_id, strength INTEGER, magic INTEGER, endurance INTEGER, agility INTEGER, luck INTEGER)"
const createElementalsTableQuery="CREATE TABLE IF NOT EXISTS elementals (persona_id INTEGER, physical TEXT, gun TEXT, fire TEXT, ice TEXT, electric TEXT, wind TEXT, psychic TEXT, nuclear TEXT, bless TEXT, curse TEXT)"
const createStockTableQuery="CREATE TABLE IF NOT EXISTS stock (stock_id INTEGER, persona_id INTEGER)"
//--Creating Tables---
database.run(createPersonasTableQuery, error => {
  if (error) console.error(new Error("Create personas table failed."), error); 
  else console.log("Create persona table succeeded");
});
database.run(createSkillsTableQuery, error => {
  if (error) console.error(new Error("Create skills table failed."), error);
  else console.log("Create skills table succeeded");
});
database.run(createPersonasSkillsTableQuery, error => {
  if (error) console.error(new Error("Create personas_skills table failed."), error);
  else console.log("Create persona_skills table succeeded");
});
database.run(createStatsTableQuery, error => {
  if (error) console.error(new Error("Create stats table failed."), error);
  else console.log("Create stats table succeeded");
});
database.run(createElementalsTableQuery, error => {
  if (error) console.error(new Error("Create elementals table failed."), error);
  else console.log("Create elementals table succeeded");
});
database.run(createStockTableQuery, error => {
  if (error) console.error(new Error("Create stock table failed."), error);
  else console.log("Create stock table succeeded");
});

module.exports = database;