const books = require('./models')
const controller = {}

controller.index = (req, res) => {
    book.findAll()
    .then(books => {
      res.json({
        message: 'ok',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  controller.show = (req, res) => {
    book.findById(req.params.id)
    .then(books => {
      res.json({
        message: 'ok',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  controller.create = (req, res) => {
    book.create({
      title: req.body.title,
      author: req.body.author,
      img: req.body.img,
      genre: req.body.genre,
      page_num: req.body.page_num,
      summary: req.body.summary
    }).then(books => {
      res.json({
        message: 'ok',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  controller.update = (req, res) => {
    book.update({
      title: req.body.title,
      author: req.body.author,
      img: req.body.img,
      genre: req.body.genre,
      page_num: req.body.page_num,
      summary: req.body.summary,
    },req.params.id)
    .then(books => {
      res.json({
        message: 'ok',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  controller.destroy = (req, res) => {
    book.destroy(req.params.id)
    .then(books => {
      res.json({
        message: 'ok',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  module.exports = controller;