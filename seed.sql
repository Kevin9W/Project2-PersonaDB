DROP TABLE IF EXISTS personas;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS personas_skills;
DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS elementals;

CREATE TABLE personas (name TEXT, arcana TEXT);
CREATE TABLE skills (name TEXT, type TEXT, effect TEXT, cost INTEGER, cost_type TEXT);
CREATE TABLE personas_skills (persona_id INTEGER, skills_id INTEGER);
CREATE TABLE stats (persona_id, strength INTEGER, magic INTEGER, endurance INTEGER, agility INTEGER, luck INTEGER);
CREATE TABLE elementals (persona_id INTEGER, physical TEXT, gun TEXT, fire TEXT, ice TEXT, electric TEXT, wind TEXT, psychic TEXT, nuclear TEXT, bless TEXT, curse TEXT);

INSERT INTO personas VALUES ("Arsene", "Fool");
INSERT INTO skills VALUES ("Eiha", "Curse", "Deals weak Curse damage to 1 foe.", 4, "SP");
INSERT INTO skills VALUES ("Cleave", "Phys", "Deals weak Phys damage to 1 foe.", 6, "% HP");
INSERT INTO skills VALUES ("Sukunda", "Support", "Decrease 1 foe's Agility for 3 turns.	", 8, "SP");
INSERT INTO skills VALUES ("Dream Needle", "Phys", "Deal medium Phys damage and inflict Sleep (medium odds) to 1 foe.", 4, "SP");
INSERT INTO skills VALUES ("Adverse Resolve", "Passive", "Increase critical rate when being ambushed.", NULL, NULL);
INSERT INTO personas_skills VALUES(1,1);
INSERT INTO personas_skills VALUES(1,2);
INSERT INTO personas_skills VALUES(1,3);
INSERT INTO personas_skills VALUES(1,4);
INSERT INTO personas_skills VALUES(1,5);
INSERT INTO stats VALUES(1,2,2,2,3,1);
INSERT INTO elementals VALUES(1,"--","--","--","Weak","--","--","--","--","Weak","Resist");

INSERT INTO personas VALUES ("Jack-o'-Lantern", "Magician");
INSERT INTO skills VALUES ("Agi", "Fire", "Deals weak Fire damage to 1 foe.", 4, "SP");
INSERT INTO skills VALUES ("Dazzler", "Aliment", "Inflict Dizzy (high odds) to 1 foe.", 5, "SP");
INSERT INTO skills VALUES ("Rakunda", "Support", "Decrease 1 foe's Defense for 3 turns.	", 8, "SP");
INSERT INTO skills VALUES ("Sharp Student", "Passive", "Lower odds of receiving critical hit.", NULL, NULL);
INSERT INTO skills VALUES ("Resist Sleep", "Passive", "Reduce susceptibility to Sleep.", NULL, NULL);
INSERT INTO personas_skills VALUES(2,6);
INSERT INTO personas_skills VALUES(2,7);
INSERT INTO personas_skills VALUES(2,8);
INSERT INTO personas_skills VALUES(2,9);
INSERT INTO personas_skills VALUES(2,10);
INSERT INTO stats VALUES(2,2,3,3,3,2);
INSERT INTO elementals VALUES(2,"--","Weak","Absorb","Weak","--","Weak","--","--","--","--");

INSERT INTO personas VALUES ("Mandrake", "Death");
INSERT INTO skills VALUES ("Energy Drop", "Healing", "Cure Confuse/Fear/Despair/Rage/Brainwash of 1 ally.", 4, "SP");
INSERT INTO skills VALUES ("Pulinpa", "Aliment", "Inflict Confuse (high odds) to 1 foe.", 5, "SP");
INSERT INTO skills VALUES ("Lunge", "Phys", "Deal weak Phys damage to 1 foe.", 5, "% HP");
INSERT INTO skills VALUES ("Skull Crakcer", "Phys", "Deal medium Phys damage and inflict Confuse (medium odds) to 1 foe.", 10, "% HP");
INSERT INTO personas_skills VALUES(3,11);
INSERT INTO personas_skills VALUES(3,12);
INSERT INTO personas_skills VALUES(3,13);
INSERT INTO personas_skills VALUES(3,14);
INSERT INTO personas_skills VALUES(3,3);
INSERT INTO stats VALUES(3,2,3,3,4,4);
INSERT INTO elementals VALUES(3,"--","--","Weak","--","Resist","--","--","--","--","--");

INSERT INTO skills VALUES ("deleteMe", "Fire", "Deals 1337 Fire damage to 1 foe.", 4, "SP");