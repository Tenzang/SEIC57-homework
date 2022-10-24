CREATE TABLE cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    note TEXT,
    image TEXT --url for a butterfly picture
);

--sample seed data
INSERT INTO cities (name) VALUES ('Sydney');
INSERT INTO cities (name) VALUES ('Melbourne');
INSERT INTO cities (name) VALUES ('Hobart');
INSERT INTO cities (name) VALUES ('Singapore');

