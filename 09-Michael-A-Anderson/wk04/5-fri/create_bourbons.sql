CREATE TABLE bourbons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    alcohol_content TEXT,
    image TEXT
);

INSERT INTO bourbons (name, alcohol_content) VALUES ("Jim Beam White Label","40%");
INSERT INTO bourbons (name, alcohol_content) VALUES ("Jim Beam Black Label","45%");