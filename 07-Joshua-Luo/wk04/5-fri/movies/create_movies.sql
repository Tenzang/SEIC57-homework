PRAGMA FOREIGN_KEYS=ON;
CREATE TABLE movies(
    id_m INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    id_d INTEGER,
    foreign key(id_d) references directors(id_d)
);


INSERT INTO movies VALUES(1,"Titanic","https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",2);
INSERT INTO movies VALUES(2,"Interstellar","https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",1);


