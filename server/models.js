const db = require('../db/config')

const books ={}

books.findAll = () => {
    return db.query(`SELECT * FROM books `);
  };


  
  
module.exports = books