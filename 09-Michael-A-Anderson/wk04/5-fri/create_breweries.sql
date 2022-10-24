CREATE TABLE breweries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    image TEXT
);

INSERT INTO breweries (name,country) VALUES ("Jim Beam", "USA");
INSERT INTO breweries (name,country) VALUES ("Jack Daniels", "USA");
