CREATE TABLE heros(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    primarystat TEXT,
	agility FLOAT,
    intelligence FLOAT,
    strength FLOAT
);
-- .mode csv
-- .import dota2_hero_stats.csv dota2_hero