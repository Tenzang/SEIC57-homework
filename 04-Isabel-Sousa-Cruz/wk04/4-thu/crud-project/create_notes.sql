CREATE TABLE notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    creation_date TEXT
);


-- sample data

INSERT INTO notes (title, content, creation_date) VALUES ("Homework", "Search about SQL", date("now"));