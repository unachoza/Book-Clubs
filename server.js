const express = require('express');
const logger = require('morgan');
//const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
//app.use(express.static('public'));
app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello world');
});

const booksRoutes = require('./server/router');
app.use('/books', booksRoutes);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});