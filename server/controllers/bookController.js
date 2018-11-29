const books = require('../models/bookModels')
// const bookClubs = require('./models')
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

  controller.indexBookClub = (req, res) => {
    books.findAllclubs()
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

  controller.indexUsers = (req, res) => {
    books.findAllUsers()
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

  
  
  controller.showClub = (req, res) => {
    books.findByIdBookClub (req.params.id)
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

  controller.showUsers = (req, res) => {
    books.findByIdUsers(req.params.id)
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

  controller.createBook = (req, res) => {
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

//creating a book // I commented this out and was no longer able to connect in post man
controller.createBookClub = (req, res) => {
  console.log("checking create" , req.body)
  books.createBookClub({
    bc_name: req.body.bc_name,
    bc_description: req.body.bc_description,
    bc_location: req.body.bc_location
  })
  .then(bookClubs => {
    res.json({
      message:'yay new book club!',
      data: bookClubs,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}


controller.createUser = (req, res) => {
  console.log("checking create" , req.body)
  books.createUser({
    user_name: req.body.user_name,
    user_password: req.body. user_password,
    email: req.body.email,
    user_location: req.body.user_location,

  })
  .then(bookClubs => {
    res.json({
      message:'yay new user!',
      data: bookClubs,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

  
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

  controller.updateBookClub = (req, res) => {
    books.updateBookClub({
    bc_name: req.body.bc_name,
    bc_description: req.body.bc_description,
    bc_location: req.body.bc_location
    },req.params.id)
    .then(books => {
      res.json({
        message: 'ok, made change',
        data: books,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

  controller.updateUser= (req, res) => {
    books.updateUser({
      user_name: req.body.user_name,
      user_password: req.body. user_password,
      email: req.body.email,
      user_location: req.body.user_location
    },req.params.id)
    .then(books => {
      res.json({
        message: 'ok, made change',
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
  
  controller.destroyBookClub = (req, res) => {
    books.destroyBookClub(req.params.id)
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
  
  controller.destroyUser = (req, res) => {
    books.destroyUser(req.params.id)
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