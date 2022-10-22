CREATE TABLE albums(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    band TEXT,
    image TEXT,
    released_year INTEGER,
    info TEXT
);

-- seed

INSERT INTO albums (name, band, image, released_year, info) VALUES (
    "Inside In / Inside Out", "The Kooks", "https://media.pitchfork.com/photos/5929bc50abf31b7dc7155cb9/1:1/w_600/c5cc2a18.jpg", 2006, "Inside In / Inside Out is the debut studio album by British indie rock band The Kooks. It was released on 23 January 2006 on Virgin Records. It contains the singles, 'Eddie's Gun', 'Sofa Song', 'You Don't Love Me', 'Naïve', 'She Moves in Her Own Way', and 'Ooh La'."
    );