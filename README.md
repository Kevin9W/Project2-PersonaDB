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
Replace [PH] in the request body with values of the appropriate type.

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

Skills - Up to 8 skills can be added.

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|name            |The title of the skill associated with new persona.   |string  |

### PUT /api/personas/{name}/
Persona to be updated uses {name} from request parameters.
Replace [PH] in the request body with values of the appropriate type.

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
|name            |New name of persona to be updated.           	        |string  |
|arcana          |New tarot card arcana for persona to be updated.      |string  |

Stats

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|strength        |New strength rating for new persona to be updated.    |integer |
|magic           |New magic rating for new persona to be updated.       |integer |
|endurance       |New endurance for new persona to be updated.          |integer |
|agility         |New agility rating for new persona to be updated.     |integer |
|luck            |New luck rating for new persona to be updated.        |integer |

Elementals

|Name            |Description                                           |Type    |
|----------------|------------------------------------------------------|--------|
|physical        |New physical resistance for new persona to be updated.|string  |
|gun             |New gun resistance for new persona to be updated.     |string  |
|fire            |New fire resistance for new persona to be updated.    |string  |
|ice             |New ice resistance for new persona to be updated.     |string  |
|electric        |New electric resistance for new persona to be updated.|string  |
|wind            |New wind resistance for new persona to be updated.    |string  |
|psychic         |New psychic resistance for new persona to be updated. |string  |
|nuclear         |New nuclear resistance for new persona to be updated. |string  |
|curse           |New curse resistance for new persona to be updated.   |string  |
|bless           |New bless resistance for new persona to be updated.   |string  |

Skills - Up to 8 skills can be updated or added.

|Name            |Description                                                      |Type    |
|----------------|-----------------------------------------------------------------|--------|
|name            |New title of the skill associated with new persona to be updated.|string  |

