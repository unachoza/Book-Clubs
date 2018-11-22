const db = require('../db/config')

const books ={}

books.findAll = () => {
    return db.query(`SELECT * FROM books `);
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
  
  books.update = (books, id) => {
    return db.one(
      `
      UPDATE books SET
        title = $1,
        author = $2,
        img = $3,
        genre = $4
        page_num = $5
        summary = $6
      WHERE id = $7
      RETURNING *
    `,
      [books.title, books.author, books.img, books.genre, books.page_num, books.summary, id]
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
  
module.exports = books