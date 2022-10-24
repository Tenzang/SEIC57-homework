CREATE TABLE scandals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    paragraph TEXT,
    image TEXT --URL for butterflies 
);
--sample seed data
INSERT INTO scandals ( name , paragraph, image) VALUES (' Part : 1 ', ' Pragaraph here ' ,'http://prod-upp-image-read.ft.com/cbccfa30-2c5d-11e8-9b4b-bc4b9f08f381');
