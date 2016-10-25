// LOAD ENV VARIABLES
require('dotenv').config();

// SET SERVER PORT
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/messageboardsdb11`

// REQUIRES
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');

// Mongoose
const mongoose = require('mongoose')
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `Mongo connected to ${MONGODB_URI}`);
})

// APP DECLARATION
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server)

// SERVER LISTEN
server.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// MIDDLEWARE FILES OUTSOURCED
require('./config/webpack')(app);
require('./config/socket')(app,io);

// ROUTES
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
  let filepath = path.resolve('index.html');
  res.sendFile(filepath);
});

// ALLOW REACT ROUTING
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build/index.html'));
// });

module.exports = io
