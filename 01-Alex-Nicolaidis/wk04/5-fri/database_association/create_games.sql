CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    developer TEXT,
    release TEXT,
    information, TEXT,
    image TEXT
);

--- seed data

INSERT INTO games (name, developer, release) VALUES ('Apex Legends', 'Respawn', '2019-02-04');
INSERT INTO games (name, developer, release) VALUES ('Overwatch 2', 'Blizzard', '2022-10-04');

