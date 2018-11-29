const db = require('../../db/config')

const books ={}

books.findAll = () => {
    return db.query(`SELECT * FROM books `);
  };

books.findAllclubs = () => {
  return db.query(`SELECT * FROM book_club `);
};

books.findAllUsers = () => {
  return db.query(`SELECT * FROM users `);
};

books.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM books
    WHERE id = $1
  `,
    [id]
  );
};

books.findByIdBookClub = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM book_club
    WHERE id = $1
  `,
    [id]
  );
};

books.findByIdUsers = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1
  `,
    [id]
  );
};

//adding book to database
books.create = books => {
  return db.one(
    `
    INSERT INTO books
    (title, author, img, genre, page_num, summary)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `,
    [books.title, books.author, books.img, books.genre, books.page_num, books.summary]
  );
};
//creating new bookclub and adding to database
books.createBookClub = book_club => {
  return db.one(
    `
    INSERT INTO book_club
    (bc_name, bc_description, bc_location)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [book_club.bc_name, book_club.bc_description, book_club.bc_location]
  );
};

//creating new User and adding to database
books.createUser = users => {
  return db.one(
    `
    INSERT INTO users
    (user_name, user_password , email, user_location )
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [users.user_name, users.user_password , users.email, users.user_location]
  );
};




books.update = (books, id) => {
  return db.one(
    `
    UPDATE books SET
      title = $1,
      author = $2,
      img = $3,
      genre = $4,
      page_num = $5,
      summary = $6
    WHERE id = $7
    RETURNING *
  `,
    [books.title, books.author, books.img, books.genre, books.page_num, books.summary, id]
  );
};

books.updateBookClub = (books, id) => {
  return db.one(
    `
    UPDATE book_club SET
      bc_name = $1,
      bc_description = $2,
      bc_location = $3 
    WHERE id = $4
    RETURNING *
  `,
    [books.bc_name, books.bc_description, books.bc_location, id]
  );
};

books.updateUser = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      user_name = $1,
      user_password = $2,
      email = $3, 
      user_location = $4
    WHERE id = $5
    RETURNING *
  `,
  [users.user_name, users.user_password , users.email, users.user_location, id]
  );
};

books.destroy = id => {
  return db.none(
    `
    DELETE FROM books
    WHERE id = $1
  `,
    [id]
  );
};
books.destroyBookClub = id => {
  return db.none(
    `
    DELETE FROM book_club
    WHERE id = $1
  `,
    [id]
  );
};
books.destroyUser = id => {
  return db.none(
    `
    DELETE FROM users
    WHERE id = $1
  `,
    [id]
  );
};




module.exports = books