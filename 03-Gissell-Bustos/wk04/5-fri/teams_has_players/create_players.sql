CREATE TABLE players(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    team_id INTEGER, 
    alias TEXT, 
    status TEXT,
    age INTEGER,
);
--seed data
INSERT INTO players (alias, status, age) VALUES ('Mario Kempes', 'retired', '84');
INSERT INTO players (alias, status, age) VALUES ('Pipita Higuain', 'titular', '34');