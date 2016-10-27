const express = require('express');
const router = express.Router();

const Property = require('../models/Property');
const Client = require('../models/Client');

router.route('/')
  .get((req, res) => {
    Property.find({})
    .then(allProperties => res.send(allProperties))
    .catch(err => res.status(400).send(err));
  })

  .post((req, res) => {
    Property.create(req.body.property)
    .then(property => Property.find({}))
    .then(allProperties => res.send(allProperties))
    .catch(err => res.status(400).send(err));
  })

  .put((req, res) => {
    Property.findByIdAndUpdate(req.body.property._id, { $set: req.body.property }, { new: true })
    .then(updated => Property.find({}))
    .then(allProperties => res.send(allProperties))
    .catch(err => res.status(400).send(err));
  });


router.route('/:id')
     .get((req, res) => {
       Property.findOne({ _id: req.params.id })
       .then((property) => {
         console.log('property: ', property);
         res.send(property);
       })
       .catch(err => res.status(400).send(err));
     })

     .delete((req, res) => {
       Property.findByIdAndRemove(req.params.id)
       .then(property => Client.findWithPropertyId(req.params.id))
      //  .then((client) => {
      //    console.log('client1: ', client);
      //    return Client.findByIdAndUpdate(client[0]._id, { $set: { propertys: null } }, { new: true });
      //  })
       .then((client) => {
         console.log('client2', client);
         return Property.find({});
       })
       .then(allProperties => res.send(allProperties))
       .catch(err => res.status(400).send(err));
     });

module.exports = router;
