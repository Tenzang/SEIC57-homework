CREATE TABLE trains (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    lines TEXT,
    review TEXT,
    image TEXT
);

INSERT INTO trains (name, lines) VALUES ('K', 'T2, T3, T8');
INSERT INTO trains (name, lines) VALUES ('T', 'T1, T4, T7, T9');