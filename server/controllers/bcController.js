const bookClubs = require('../models/bcModels')
const bcController = {}

bcController.index = (req, res) => {
    bookClubs.findAll()
    // res.send(data)
    .then(bookClubs => {
      res.json({
        message: 'ok',
        data: bookClubs,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  bcController.show = (req, res) => {
    bookClubs.findById(req.params.id)
    .then(bookClubs => {
      res.json({
        message: 'ok',
        data: bookClubs,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  // app.use(bodyParser.urlencoded({
  //   extended: true
  // }));

//   bcController.createBook = (req, res) => {
//     console.log("checking create" , req.body)
//     bookClubs.create({
//       title: req.body.title,
     
//     }).then(bookClubs => {
//       res.json({
//         message: 'ok',
//         data: bookClubs,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
//   };

//creating a bookclub
bcController.createBookClub = (req, res) => {
  console.log("checking create" , req.body)
  bookClubs.create({
    bc_name: req.body.bc_name,
    bc_description: req.body.bc_description,
    bc_location: req.body.bc_location
   
  })
  .then(obj => {
    res.json({
      message:'yay new book club!',
      data: bookClubs,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

  
//   bcController.update = (req, res) => {
//     bookClubs.update({
//       title: req.body.title,
//       author: req.body.author,
//       img: req.body.img,
//       genre: req.body.genre,
//       page_num: req.body.page_num,
//       summary: req.body.summary
//     },req.params.id)
//     .then(bookClubs => {
//       res.json({
//         message: 'ok',
//         data: bookClubs,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
//   };
  
  bcController.destroy = (req, res) => {
    bookClubs.destroy(req.params.id)
    .then(bookClubs => {
      res.json({
        message: 'was destroyed',
        data: bookClubs,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };
  
  module.exports = bcController;