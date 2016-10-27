const mongoose = require('mongoose');

// can set validation in the schema.
const clientSchema = new mongoose.Schema({
  name: {
    first: { type: String, minlength: 1 },
    last: { type: String, minlength: 1 },
  },
  email: { type: String, maxlength: 30 },
  phone: { type: Number, maxlength: 12 },
  propertys: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
});

// statics - class/model method - User.findFemale()
clientSchema.statics.findWithPropertyId = function (propertyId) {
  return Client.find({ propertys: propertyId });
};
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

// comes prebuilt with all the cool methods

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// etc
