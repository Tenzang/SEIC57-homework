CREATE TABLE predators (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    paragraph TEXT,
    image TEXT --URL for butterflies 
);
--sample seed data
INSERT INTO predators ( name , paragraph, image) VALUES (' name : ', ' Pragaraph here ' ,'http://prod-upp-image-read.ft.com/cbccfa30-2c5d-11e8-9b4b-bc4b9f08f381');
