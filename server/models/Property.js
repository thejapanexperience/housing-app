const mongoose = require('mongoose');

// can set validation in the schema.
const propertySchema = new mongoose.Schema({
  name: { type: String, maxlength: 30 },
  address: { type: String, maxlength: 60 },
  price: { type: Number, maxlength: 6 },
  available: { type: Boolean },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;

// comes prebuilt with all the cool methods

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// etc
