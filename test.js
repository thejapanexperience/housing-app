const mongoose = require('mongoose')
require('dotenv').config({ silent: true });
const { MLABPW } = process.env;
console.log('MLABPW: ', MLABPW)

// const MONGO_URI =   `mongodb://thejapanexperience:${MLABPW}@ds061246.mlab.com:61246/richarddb`
const MONGO_URI =   `mongodb://localhost/testdb`


mongoose.connect(MONGO_URI, err => {
  console.log(err || `Mongo connected to ${MONGO_URI}`);
})

const Burger = mongoose.model('Burger', {
  type: String,
  price: Number
})

Burger.find({}, (err, burgers) => {
  if (err) return console.log('err: ', err);
  console.log('burgers: ', burgers)
});

Burger.findOne({type:'pineapple'}, (err, burgers) => {
  if (err) return console.log('err: ', err);
  console.log('burgers: ', burgers)
});

Burger.findById('58090cba5827ae8128f73e28', (err, burgers) => {
  if (err) return console.log('err: ', err);
  console.log('burgers: ', burgers)
});

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// Make a new burger. lowercase = new document. Model is uppercase.
// Burger.find({}, (err, burgers) => {
//   if (err) return console.log('err: ', err);
//   console.log('burgers: ', burgers)
//
//   let burger = new Burger({type: 'avocado', price: 12.99})
//   // or
//   let burger2 = new Burger()
//   burger2.type = 'BigMac'
//   burger2.price = 15.00
//
//   burger.save(err => {
//     if (err) return console.log('err: ', err)
//   })
//
//   burger2.save(err => {
//     if (err) return console.log('err: ', err)
//   })
//
// });

mongoose.disconnect()

{
  "name": "sockets-io-message-board",
  "version": "1.0.0",
  "description": "",
  "main": "server/app.js",
  "scripts": {
    "start": "node server/app.js"
  },
  "engines": {
    "node": "6"
  },
  "keywords": [],
  "author": "Richard Mands <thejapanexperience@gmail.com>",
  "license": "ISC",
  "dependencies": {
    "apeman-react-album": "^3.0.2",
    "axios": "^0.14.0",
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-polyfill": "^6.16.0",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-react": "^6.16.0",
    "body-parser": "^1.15.2",
    "bootstrap-loader": "^1.2.0",
    "bootstrap-sass": "^3.3.7",
    "cors": "^2.8.1",
    "css-loader": "^0.25.0",
    "dotenv": "^2.0.0",
    "express": "^4.14.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "flux": "^3.0.0",
    "imports-loader": "^0.6.5",
    "jquery": "^3.1.1",
    "mailcomposer": "^3.12.0",
    "material-ui": "^0.16.0",
    "moment": "^2.15.1",
    "mongoose": "^4.6.4",
    "morgan": "^1.7.0",
    "mysql": "^2.11.1",
    "node-geocoder": "^3.15.0",
    "node-sass": "^3.10.1",
    "phantomjs-prebuilt": "^2.1.13",
    "printscreen": "^1.2.1",
    "react": "^15.3.2",
    "react-bootstrap": "^0.30.5",
    "react-dom": "^15.3.2",
    "react-image-gallery": "^0.7.2",
    "react-picture-show": "^1.4.0",
    "react-router": "^2.8.1",
    "react-slider": "^0.7.0",
    "react-tap-event-plugin": "^1.0.0",
    "resolve-url-loader": "^1.6.0",
    "sass-loader": "^4.0.2",
    "semantic-ui-card": "^2.2.3",
    "semantic-ui-react": "^0.56.1",
    "sendmail": "^1.0.0",
    "smart-city-finder": "^1.1.3",
    "socket.io": "^1.5.0",
    "socket.io-client": "^1.5.0",
    "squel": "^5.5.0",
    "style-loader": "^0.13.1",
    "twitter": "^1.4.0",
    "url-loader": "^0.5.7",
    "uuid": "^2.0.3",
    "watson-developer-cloud": "^2.5.0",
    "webpack": "^1.13.2",
    "webpack-dev-middleware": "^1.8.3",
    "webpack-hot-middleware": "^2.12.2"
  }
}
