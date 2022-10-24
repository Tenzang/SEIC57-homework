CREATE TABLE printers3d (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    print_size TEXT,
    resolution TEXT,
    monoscreen INTEGER,
    image TEXT
);

INSERT INTO printers3d (brand,model,print_size,resolution,monoscreen,image) VALUES ('Elegoo','Mars Pro','132x80x165mm','2k',0,'https://m.media-amazon.com/images/I/61kjiMPupyL._AC_SL1500_.jpg');
INSERT INTO printers3d (brand,model,print_size,resolution,monoscreen,image) VALUES ('Elegoo','Saturn','196x122x210mm','8k',1,'https://m.media-amazon.com/images/I/61kjiMPupyL._AC_SL1500_.jpg');
INSERT INTO printers3d (brand,model,print_size,resolution,monoscreen,image) VALUES ('Anycubic','Photon Mono','132x80x165mm','4k',1,'https://m.media-amazon.com/images/I/71r-s5l1xOL._AC_SL1500_.jpg');
