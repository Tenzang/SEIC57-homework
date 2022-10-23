CREATE TABLE sports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    goat TEXT,
    image TEXT
);

--Insert some seed data

INSERT INTO sports (name, goat, image) VALUES ('Tennis', 'Roger Federer','https://media.newyorker.com/photos/63249cff39ac97c4c23ff5d0/master/pass/Marzorati%20-%20Federer%20Retirement%202.jpg');
INSERT INTO sports (name, goat, image) VALUES ('Golf', 'Tiger Woods', 'https://www.japantimes.co.jp/wp-content/uploads/2022/07/np_file_168898.jpeg');


-- code to create the database from the above sql file is:
-- sqlite3 database.sqlite3 < create_sports.sql note -- is not include when this is run at the command line this is just to note a comment in sql files

-- | **URL** | **HTTP Verb** |  **Action**|
-- |------------|-------------|------------|
-- | /photos/         | GET       | index  
-- | /photos/new      | GET       | new   
-- | /photos          | POST      | create   
-- | /photos/:id      | GET       | show       
-- | /photos/:id/edit | GET       | edit       
-- | /photos/:id      | PATCH/PUT | update    
-- | /photos/:id      | DELETE    | destroy  

--https://gist.github.com/alexpchin/09939db6f81d654af06b