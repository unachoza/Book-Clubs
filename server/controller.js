const books = require('./models')
const controller = {}

controller.index = (req, res) => {
    books.findAll()
    // res.send(data)
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
    books.findById(req.params.id)
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
  
  // app.use(bodyParser.urlencoded({
  //   extended: true
  // }));

  controller.create = (req, res) => {
    console.log("checking create" , req.body)
    books.create({
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
    books.update({
      title: req.body.title,
      author: req.body.author,
      img: req.body.img,
      genre: req.body.genre,
      page_num: req.body.page_num,
      summary: req.body.summary
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
    books.destroy(req.params.id)
    .then(books => {
      res.json({
        message: 'was destroyed',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  module.exports = controller;