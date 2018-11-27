const express = require('express');
const router = express.Router()

const controller = require('../controllers/bookController')

router.get('/', controller.index);
router.get('/bookClubs', controller.indexBookClub);
router.get('/:id', controller.show);
router.get('/bookClubs/:id', controller.showClub);
router.post('/', controller.createBook);
router.post('/createBookClub', controller.createBookClub);    
router.put('/:id', controller.update);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;


