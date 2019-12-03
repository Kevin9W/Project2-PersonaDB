# Persona 5 Compendium

## Table of Contents
* Summary
* Documentation
* Technologies Used
* Next Steps

## Summary
This API catalouges the personas that are acquireable from Persona 5. Each persona will have a set of stats, skills, and elemental resistances.

# Documentation

## Methods
GET | POST | PUT | DELETE

## Personas
### GET /api/personas/
This route retrieves basic information from all personas.

Response:
```
{
    "personas": [
        {
            "name": "Arsene",
            "arcana": "Fool"
        },
        {
            "name": "Jack-o'-Lantern",
            "arcana": "Magician"
        }
    ]
}
```
Personas

|Name            |Description                           |Type    |
|----------------|--------------------------------------|--------|
|name            |The name of the persona.              |string  |
|arcana          |The tarot card arcana of the persona. |string  |

### GET /api/personas/{name}/
This route retrieves information about the persona with the {name} from the request parameters.

Response:
```
{
    "name": "Arsene",
    "arcana": "Fool",
    "stats": [
        {
            "strength": 2,
            "magic": 2,
            "endurance": 2,
            "agility": 3,
            "luck": 1
        }
    ],
    "elementals": [
        {
            "physical": "--",
            "gun": "--",
            "fire": "--",
            "ice": "Weak",
            "electric": "--",
            "wind": "--",
            "psychic": "--",
            "nuclear": "--",
            "curse": "Resist",
            "bless": "Weak"
        }
    ],
    "skills": [
        {
            "name": "Eiha",
            "type": "Curse"
        },
        {
            "name": "Cleave",
            "type": "Phys"
        },
        {
            "name": "Sukunda",
            "type": "Support"
        },
        {
            "name": "Dream Needle",
            "type": "Phys"
        },
        {
            "name": "Adverse Resolve",
            "type": "Passive"
        }
    ]
}
```
Basic Information

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |The name of chosen persona.                           |string  |
|arcana          |The tarot card arcana for chosen persona.             |string  |

Stats

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|strength        |The strength rating for chosen persona.               |integer |
|magic           |The magic rating for chosen persona.                  |integer |
|endurance       |The endurance for chosen persona.                     |integer |
|agility         |The agility rating for chosen persona.                |integer |
|luck            |The luck rating for chosen persona.                   |integer |

Elementals

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|physical        |The physical resistance for chosen persona.           |string  |
|gun             |The gun resistance for chosen persona.                |string  |
|fire            |The fire resistance for chosen persona.               |string  |
|ice             |The ice resistance for chosen persona.                |string  |
|electric        |The electric resistance for chosen persona.           |string  |
|wind            |The wind resistance for chosen persona.               |string  |
|psychic         |The psychic resistance for chosen persona.            |string  |
|nuclear         |The nuclear resistance for chosen persona.            |string  |
|curse           |The curse resistance for chosen persona.              |string  |
|bless           |The bless resistance for chosen persona.              |string  |

Skills

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |The title of the skill associated with chosen persona.|string  |
|type            |The type of the skill associated with chosen persona. |string  |

### POST /api/personas/
This route creates a new persona using the request body. Replace [PH] in the request body with values of the appropriate type.

Request:
```
{
    "name": [PH],
    "arcana": [PH],
    "stats": [
        {
            "strength": [PH],
            "magic": [PH],
            "endurance": [PH],
            "agility": [PH],
            "luck": [PH]
        }
    ],
    "elementals": [
        {
            "physical": [PH],
            "gun": [PH],
            "fire": [PH],
            "ice": [PH],
            "electric": [PH],
            "wind": [PH],
            "psychic": [PH],
            "nuclear": [PH],
            "curse": [PH],
            "bless": [PH]
        }
    ],
    "skills": [
        {
            "name": [PH]
        },
        {
            "name": [PH]
        },
        {
            "name": [PH]
        },
        {
            "name": [PH]
        },
        {
            "name": [PH]
        }
    ]
}
```
Basic Information

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |The name of new persona.                     	        |string  |
|arcana          |The tarot card arcana for new persona.                |string  |

Stats

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|strength        |The strength rating for new persona.         	        |integer |
|magic           |The magic rating for new persona.               	    |integer |
|endurance       |The endurance for new persona.                   	    |integer |
|agility         |The agility rating for new persona.            	    |integer |
|luck            |The luck rating for new persona.             	        |integer |

Elementals

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|physical        |The physical resistance for new persona.				|string  |
|gun             |The gun resistance for new persona.         	        |string  |
|fire            |The fire resistance for new persona.            	    |string  |
|ice             |The ice resistance for new persona.            	    |string  |
|electric        |The electric resistance for new persona.       	    |string  |
|wind            |The wind resistance for new persona.           	    |string  |
|psychic         |The psychic resistance for new persona.        	    |string  |
|nuclear         |The nuclear resistance for new persona.        	    |string  |
|curse           |The curse resistance for new persona.          	    |string  |
|bless           |The bless resistance for new persona.          	    |string  |

Skills - Up to 8 unique skills can be added.

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |The title of the skill associated with new persona.   |string  |

### PUT /api/personas/{name}/
This route updates the persona with the {name} from the request parameters using the request body. Replace [PH] in the request body with values of the appropriate type.

Request:
```
{
    "name": [PH],
    "arcana": [PH],
    "stats": [
        {
            "strength": [PH],
            "magic": [PH],
            "endurance": [PH],
            "agility": [PH],
            "luck": [PH]
        }
    ],
    "elementals": [
        {
            "physical": [PH],
            "gun": [PH],
            "fire": [PH],
            "ice": [PH],
            "electric": [PH],
            "wind": [PH],
            "psychic": [PH],
            "nuclear": [PH],
            "curse": [PH],
            "bless": [PH]
        }
    ],
    "skills": [
        {
            "name": [PH]
        },
        {
            "name": [PH]
        },
        {
            "name": [PH]
        },
        {
            "name": [PH]
        },
        {
            "name": [PH]
        }
    ]
}
```
Basic Information

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |Update name of chosen persona.           	        	|string  |
|arcana          |Update tarot card arcana for chosen persona.      	|string  |

Stats

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|strength        |Update strength rating for chosen persona.    		|integer |
|magic           |Update magic rating for chosen persona.       		|integer |
|endurance       |Update endurance for chosen persona.          		|integer |
|agility         |Update agility rating for chosen persona.     		|integer |
|luck            |Update luck rating for chosen persona.        		|integer |

Elementals

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|physical        |Update physical resistance for chosen persona.		|string  |
|gun             |Update gun resistance for chosen persona.     		|string  |
|fire            |Update fire resistance for chosen persona.    		|string  |
|ice             |Update ice resistance for chosen persona.     		|string  |
|electric        |Update electric resistance for chosen persona.		|string  |
|wind            |Update wind resistance for chosen persona.    		|string  |
|psychic         |Update psychic resistance for chosen persona. 		|string  |
|nuclear         |Update nuclear resistance for chosen persona. 		|string  |
|curse           |Update curse resistance for chosen persona.   		|string  |
|bless           |Update bless resistance for chosen persona.   		|string  |

Skills - Up to 8 unique skills can be updated or added.

|Name            |Description                                                      |Type    |
|----------------|-----------------------------------------------------------------|--------|
|name            |Update skill associated with chosen persona.|string  |

### DELETE /api/personas/{name}/
This request will delete the persona with the {name} from the request parameters. Will also delete all content and relations to this persona in other tables.

## Skills

### GET /api/skills/
This route will retrieve all skills and their information.
```
{
    "skills": [
        {
            "name": "Eiha",
            "type": "Curse",
            "effect": "Deals weak Curse damage to 1 foe.",
            "cost": 4,
            "cost_type": "SP"
        },
        {
            "name": "Cleave",
            "type": "Phys",
            "effect": "Deals weak Phys damage to 1 foe.",
            "cost": 6,
            "cost_type": "% HP"
        },
        {
            "name": "Sukunda",
            "type": "Support",
            "effect": "Decrease 1 foe's Agility for 3 turns.\t",
            "cost": 8,
            "cost_type": "SP"
        }
   ]
}
```
Skills

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name       	 |The name of the skill.  							    |string  |
|type            |The elemental type of the skill. 				        |string  |
|effect    	     |The effect of the skill.      					    |string  |
|cost            |The interger cost of the skill. 	 				    |integer |
|cost_type       |The type of resource the skill will consume. 	        |string  |

### GET /api/skills/{name}/
This route will retrieve the information on the skill with the {name} from the request parameters.

Response:
```
{
    "name": "Eiha",
    "type": "Curse",
    "effect": "Deals weak Curse damage to 1 foe.",
    "cost": 4,
    "cost_type": "SP"
}
```

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name       	 |The name of the chosen skill.  						|string  |
|type            |The elemental type of the chosen skill. 		        |string  |
|effect    	     |The effect of the chosen skill.      				    |string  |
|cost            |The interger cost of the chosen skill. 			    |integer |
|cost_type       |The type of resource the chosen skill will consume.   |string  |

### GET /api/skills/{name}/personas/
This route will retrieve the names of personas that have the skill with the {name} from the request parameters

Response:
```
{
    "personas": [
        {
            "name": "Jack-o'-Lantern",
            "arcana": "Magician"
        },
        {
            "name": "Pixie",
            "arcana": "Lovers"
        }
    ]
}
```
Personas

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |The name of persona with the chosen skill.            |string  |
|arcana          |The tarot card arcana for persona with the chosen.    |string  |

### POST /api/skills/
This route will create a new skill using the request body. Replace [PH] in the request body with values of the appropriate type.

Request:
```
{
    "name": [PH],
    "type": [PH],
    "effect": [PH],
    "cost": [PH],
    "cost_type": [PH]
}
```

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name       	 |The name of the new skill.    						|string  |
|type            |The elemental type of the new skill.   		        |string  |
|effect    	     |The effect of the new skill.      				    |string  |
|cost            |The interger cost of the new skill. 				    |integer |
|cost_type       |The type of resource the new skill will consume.	    |string  |

### PUT /api/skills/{name}/
This route will update a skill with the {name} from the request parameters using the request body. Replace [PH] in the request body with values of the appropriate type.

Request:
```
{
    "name": [PH],
    "type": [PH],
    "effect": [PH],
    "cost": [PH],
    "cost_type": [PH]
}
```

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name       	 |Update name of the chosen skill.    					|string  |
|type            |Update elemental type of the chosen skill.   		    |string  |
|effect    	     |Update effect of the chosen skill.      			    |string  |
|cost            |Update interger cost of the chosen skill. 		    |integer |
|cost_type       |Update type of resource the chosen skill will consume.|string  |

### DELETE /api/skills/{name}/
This request will delete the skill with the {name} from the request parameters. Will also delete all content and relations to this skill in other tables excluding personas.

## Stats
### GET /api/stats/
This route gets you all the stats for their respective personas.
```
{
    "personas": [
        {
            "name": "Arsene",
            "arcana": "Fool",
            "strength": 2,
            "magic": 2,
            "endurance": 2,
            "agility": 3,
            "luck": 1
        },
        {
            "name": "Jack-o'-Lantern",
            "arcana": "Magician",
            "strength": 2,
            "magic": 3,
            "endurance": 3,
            "agility": 3,
            "luck": 2
        }
    ]
}
```

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name 			 |The name of the persona.                    			|string	 |
|arcana 		 |The tarot card arcana of the persona. 				|string  |
|strength        |The strength rating for the persona.				    |integer |
|magic           |The magic rating for the persona.       				|integer |
|endurance       |The endurance for the persona.			            |integer |
|agility         |The agility rating for the persona.			        |integer |
|luck            |The luck rating for the persona.				        |integer |


## Elementals
### GET /api/elementals/
This route gets you all the elemental resistances for their respective personas.
```
{
    "personas": [
        {
            "name": "Arsene",
            "arcana": "Fool",
            "physical": "--",
            "gun": "--",
            "fire": "--",
            "ice": "Weak",
            "electric": "--",
            "wind": "--",
            "psychic": "--",
            "nuclear": "--",
            "curse": "Resist",
            "bless": "Weak"
        },
        {
            "name": "Jack-o'-Lantern",
            "arcana": "Magician",
            "physical": "--",
            "gun": "Weak",
            "fire": "Absorb",
            "ice": "Weak",
            "electric": "--",
            "wind": "Weak",
            "psychic": "--",
            "nuclear": "--",
            "curse": "--",
            "bless": "--"
        }
    ]
}
```

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name 			 |The name of the persona. 								|string	 |
|arcana 		 |The tarot card arcana of the persona. 				|string  |
|physical        |The physical resistance for the persona.       	    |string  |
|gun             |The gun resistance for the persona.      		        |string  |
|fire            |The fire resistance for the persona.           	    |string  |
|ice             |The ice resistance for the persona.              	  	|string  |
|electric        |The electric resistance for the persona.         		|string  |
|wind            |The wind resistance for the persona.              	|string  |
|psychic         |The psychic resistance for the persona.           	|string  |
|nuclear         |The nuclear resistance for the persona.           	|string  |
|curse           |The curse resistance for the persona.              	|string  |
|bless           |The bless resistance for the persona.              	|string  |

## Technology Used
Express | Node | SQL 

## Next Steps
* Validation
* Front End
* Fusion Table