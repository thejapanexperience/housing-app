const mongoose = require('mongoose')

// can set validation in the schema.
const boardSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  createdAt: { type: Date, default:Date.now },
  image: { type: String },
  messages: {type: []}
})

const Board = mongoose.model('Board', boardSchema)

module.exports = Board;

// comes prebuilt with all the cool methods

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// etc
