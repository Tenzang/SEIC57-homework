CREATE TABLE bands(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    albums TEXT
);

-- seed

INSERT INTO bands (name, image, albums) VALUES ("The Kooks", "	https://dynamicmedia.livenationinternational.com/M…ia/x/w/m/de4064e7-c148-49bf-a902-f41bbbbeb4ff.jpg", "Inside In/Inside Out, Konk, Junk of the Heart, Listen, Let's Go Sunshine, 10 Tracks to Echo in the Dark");