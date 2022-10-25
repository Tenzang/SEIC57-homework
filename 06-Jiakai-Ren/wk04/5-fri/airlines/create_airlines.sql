CREATE TABLE airlines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    code TEXT,
    country TEXT,
    logo TEXT,
    fleet_size INT,
    incident_count INT
);

-- seed data
INSERT INTO airlines (name, code, country, logo) VALUES ('Qantas Airways', 'QF', 'Australia', 'https://pbs.twimg.com/profile_images/1501331816287854592/3Yri5rYD_400x400.jpg');
INSERT INTO airlines (name, code, country) VALUES ('Virgin Australia', 'VA', 'Australia');