CREATE TABLE incidents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT,
    flight_number INTEGER,
    description TEXT,
    death INTEGER,
    injury INTEGER,
    survival INTEGER,
    image TEXT
);

-- seed data
INSERT INTO incidents (code, flight_number, injury) VALUES ('JS', '2033', 20);