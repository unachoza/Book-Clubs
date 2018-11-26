const express = require('express');
const bcrouter = express.Router()

const controller = require('../controllers/bcController')


bcrouter.post('/createBookClub', controller.createBookClub);           


module.exports = bcrouter;