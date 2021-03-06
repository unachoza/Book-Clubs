const express = require('express');
const logger = require('morgan');
//const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const app = express();
//set up engine

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(logger('dev'));
//app.use(express.static('public'));
app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('contact')
  // res.send('hello world');
});

const booksRoutes = require('./server/routers/bookRouter');
app.use('/books', booksRoutes);

//not sure about thisone
// const bcRoutes = require('./server/routers/bcRouter');
// app.use('/bookclubs', bcRoutes);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});