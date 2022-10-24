CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    category TEXT,
    ultimate TEXT,
    image TEXT
);

--- seed data

INSERT INTO characters (name, category , ultimate) VALUES ('Wraith', 'Attack', 'Portals');
INSERT INTO characters (name, category , ultimate) VALUES ('Sojourn', 'Attack', 'Auto Charge Rail Gun');
