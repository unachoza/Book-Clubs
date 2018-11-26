const db = require('../../db/config')
const bookClubs ={}

// books.findAll = () => {
//     return db.query(`SELECT * FROM books `);
//   };


//   books.findById = (id) => {
//     return db.oneOrNone(
//       `
//       SELECT * FROM books
//       WHERE id = $1
//     `,
//       [id]
//     );
//   };

//   //adding book to database
//   books.create = books => {
//     return db.one(
//       `
//       INSERT INTO books
//       (title, author, img, genre, page_num, summary)
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING *
//     `,
//       [books.title, books.author, books.img, books.genre, books.page_num, books.summary]
//     );
//   };
  
//   books.update = (books, id) => {
//     return db.one(
//       `
//       UPDATE books SET
//         title = $1,
//         author = $2,
//         img = $3,
//         genre = $4
//         page_num = $5
//         summary = $6
//       WHERE id = $7
//       RETURNING *
//     `,
//       [books.title, books.author, books.img, books.genre, books.page_num, books.summary, id]
//     );
//   };
  
//   books.destroy = id => {
//     return db.none(
//       `
//       DELETE FROM books
//       WHERE id = $1
//     `,
//       [id]
//     );
//   };

  //creating new bookclub and adding to database
  bookClubs.create = book_club => {
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

 bookClubs.findAll = () => {
    return db.query(`SELECT * FROM book_club `);
  };


  bookClubs.findById = (id) => {
    return db.oneOrNone(
      `
      SELECT * FROM book_club
      WHERE id = $1
    `,
      [id]
    );
  }; 

// const book_club ={}

//   book_club.findAll = () => {
//     return db.query(`SELECT * FROM book_club `);
//   };


//   book_club.findById = (id) => {
//     return db.oneOrNone(
//       `
//       SELECT * FROM book_club
//       WHERE id = $1
//     `,
//       [id]
//     );
//   };
//   book_club.create = book_club => {
//     return db.one(
//       `
//       INSERT INTO book_club
//       (bc_name)
//       VALUES ($1)
//       RETURNING *
//     `,
//       [book_club.title, book_club.author, book_club.img, book_club.genre, book_club.page_num, book_club.summary]
//     );
//   };

//   book_club.update = (book_club, id) => {
//     return db.one(
//       `
//       UPDATE book_club SET
//       bc_name = $1,
        
//       WHERE id = $2
//       RETURNING *
//     `,
//       [book_club.bc_name, id]
//     );
//   };

//   book_club.destroy = id => {
//     return db.none(
//       `
//       DELETE FROM book_club
//       WHERE id = $1
//     `,
//       [id]
//     );
//   };

  

module.exports = bookClubs