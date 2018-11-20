const db = require('../db/config')

const book_dev ={}

book_dev.findAll = () => {
    return db.query(`SELECT * FROM book_dev`);
  };
  
module.exports = book_dev