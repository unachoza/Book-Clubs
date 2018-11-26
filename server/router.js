const express = require('express');
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.createBook);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/createBookClub', controller.createBookClub);           


module.exports = router;


