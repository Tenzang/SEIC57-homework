CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    family TEXT,
    price TEXT,
    image TEXT 
    
);
--sample seed data
INSERT INTO items ( name , family, price) VALUES (' jordan ' ,' retro3', '$100');
INSERT INTO items ( name , family, price) VALUES (' jordan ' ,' retro 5 ','$150' );
INSERT INTO items ( name , family, price) VALUES (' Air Force ' ,'  air 1 ','$130' );

