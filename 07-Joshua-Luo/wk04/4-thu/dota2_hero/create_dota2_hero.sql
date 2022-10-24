CREATE TABLE dota2_hero(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    Primary_Stat TEXT,
	Agility FLOAT,
    Agility_Gain FLOAT,
    Intelligence FLOAT,
    Intelligence_Gain FLOAT,
    Strength FLOAT,
    Strength_Gain FLOAT,
    Health FLOAT,
    Health_Regen FLOAT,
    Mana FLOAT,
    Mana_Regen FLOAT
);
.mode csv
.import dota2_hero_stats.csv dota2_hero