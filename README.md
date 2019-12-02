# Persona 5 Compendium
## Summary
This API catalouges the personas that are acquireable from Persona 5. Each persona will have a set of stats, skills, and elemental resistances.

# Documentation
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
|name            |The name of thie persona.             |string  |
|arcana          |The tarot card arcana of this Persona.|string  |

### GET /api/personas/{name}/
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
Basic Infromation
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
