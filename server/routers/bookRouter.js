const express = require('express');
const router = express.Router()

const controller = require('../controllers/bookController')
//const mailer = require( "./nodemailer")

router.get('/', controller.index);
router.get('/bookClubs', controller.indexBookClub);
router.get('/users', controller.indexUsers);
router.get('/:id', controller.show);
router.get('/bookClubs/:id', controller.showClub);
router.get('/users/:id', controller.showUsers);
router.post('/', controller.createBook);
router.post('/createBookClub', controller.createBookClub);    
router.post('/createUser', controller.createUser); 
router.put('/:id', controller.update);
router.put('/bookClubs/:id', controller.updateBookClub);
router.put('/users/:id', controller.updateUser);
router.delete('/:id', controller.destroy);
router.delete('/bookClubs/:id', controller.destroyBookClub);
router.delete('/users/:id', controller.destroyUser);
//router.post('/bookClubs/:id', mailer.sendMail())


module.exports = router;


