CREATE TABLE battleships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    commissioneddate TEXT,
    maincaliber INTEGER,
    torpedos INTEGER,
    image TEXT -- URL for battleship picture
);

--sample seed data
INSERT INTO battleships (name, commissioneddate, maincaliber, torpedos, image) VALUES ('USS Wyoming', '1912-09-25', 305, 2, 'https://bloximages.chicago2.vip.townnews.com/wyomingnews.com/content/tncms/assets/v3/editorial/b/c0/bc0de72e-3d23-5894-8e04-acbc0ba339a2/5fcfe0abb6d06.image.jpg?crop=1280%2C672%2C0%2C168&resize=1200%2C630&order=crop%2Cresize');
INSERT INTO battleships (name, commissioneddate, maincaliber, torpedos, image) VALUES ('Bismarck', '1940-08-24', 380, 0, 'https://cdn.britannica.com/50/30450-050-73451FB5/Bismarck-1940.jpg');
