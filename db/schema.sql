CREATE TABLE user_profile (
id BIGSERIAL PRIMARY KEY NOT NULL,
user_name VARCHAR NOT NULL,
user_password VARCHAR NOT NULL, 
email VARCHAR NOT NULL, 
user_location VARCHAR NOT NULL, 
book VARCHAR REFERENCES book(id) NOT NULL,
book_club INT REFERENCES ref(book_id) NOT NULL
)
CREATE TABLE book_club (
id BIGSERIAL PRIMARY KEY NOT NULL,
bc_name VARCHAR NOT NULL,
bc_description VARCHAR NOT NULL, 
bc_location VARCHAR NOT NULL, 
bc_book 
details
readers
readers_emails
)

CREATE TABLE book (

)

CREATE TABLE ref (

)