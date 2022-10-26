CREATE TABLE teams(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT, 
 gema TEXT,
 logo TEXT
);
-- sample seed data
INSERT INTO teams (name, gema) VALUES ('Evil Geniuses', 'Ruby');
INSERT INTO teams(name, gema) VALUES ('Chapitas Fc', 'Opal');