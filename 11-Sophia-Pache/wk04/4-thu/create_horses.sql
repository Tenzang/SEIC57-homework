CREATE TABLE horses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    breed TEXT,
    age INTEGER,
    image TEXT -- URL for a butterfly picture
);

-- sample seed data
INSERT INTO horses (name, breed, age, image) VALUES ('Garnet', 'Standardbred', 13, 'https://i.ibb.co/z4JfHvR/IMG-7952.jpg');
INSERT INTO horses (name, breed, age, image) VALUES ('Lando', 'Hanoverian', 24, 'https://i.ibb.co/5TT5RSC/IMG-8762.jpg');
INSERT INTO horses (name, breed, age, image) VALUES ('Herbie', 'Paint Horse', 5, 'https://i.ibb.co/XWMyJGz/IMG-4796.jpg');
INSERT INTO horses (name, breed, age, image) VALUES ('Doc', 'Tennessee Walking Horse', 20, 'https://i.ibb.co/Pm4599f/image0.jpg');
INSERT INTO horses (name, breed, age, image) VALUES ('Alex', 'Quarter Horse', 10, 'https://i.ibb.co/4jSQVm7/image1.jpg');
