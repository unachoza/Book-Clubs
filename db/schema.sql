DROP DATABASE books_dev;
CREATE DATABASE books_dev;
\c books_dev;

CREATE TABLE IF NOT EXISTS books (
id SERIAL PRIMARY KEY NOT NULL,
title VARCHAR(1000) NOT NULL,
author VARCHAR(1000) NOT NULL,
img VARCHAR(1000),
genre VARCHAR(1000) NOT NULL,
page_num INT NOT NULL,
summary VARCHAR(1000) NOT NULL
);


CREATE TABLE IF NOT EXISTS book_club (
id SERIAL PRIMARY KEY, 
bc_name VARCHAR(1000) NOT NULL,
bc_description VARCHAR(1000) NOT NULL, 
bc_location VARCHAR(1000) NOT NULL, 
bc_book_id INT REFERENCES books(id) NOT NULL,
readers VARCHAR(1000) NOT NULL,
readers_emails VARCHAR(1000) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_profile (
id SERIAL PRIMARY KEY NOT NULL,
user_name VARCHAR(15) NOT NULL,
user_password VARCHAR(8) NOT NULL, 
email VARCHAR(30) NOT NULL, 
user_location VARCHAR(1000) NOT NULL, 
books INT REFERENCES books(id) NOT NULL,
book_club INT REFERENCES book_club(id) NOT NULL
);





-- CREATE TABLE IF NOT EXISTS ref (
-- ref_id SERIAL PRIMARY KEY,
-- book_club_id INT REFERENCES book_club(id) NOT NULL,
-- book_id INT REFERENCES book(id) NOT NULL
-- );

