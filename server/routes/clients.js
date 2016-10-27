const express = require('express');

const router = express.Router();

const Client = require('../models/Client');
const Property = require('../models/Property');

router.route('/addproperty')
  .put((req, res) => {
    Client.findByIdAndUpdate(req.body.client._id, { $set: req.body.client }, { new: true })
    .then(updated => Property.findByIdAndUpdate(req.body.propertyId, { $set: { available: 'false' } }, { new: true }))
    .then(updated => Client.find({}))
    // .populate('propertys')
    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  });

router.route('/removeproperty')
  .put((req, res) => {
    Client.findByIdAndUpdate(req.body.client._id, { $set: req.body.client }, { new: true })
    .then(updated => Property.findByIdAndUpdate(req.body.propertyId, { $set: { available: 'true' } }, { new: true }))
    .then(updated => Client.find({}))
    // .populate('propertys')
    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  });


router.route('/')
  .get((req, res) => {
    Client.find({})
    // .populate('propertys')
    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  })

  .post((req, res) => {
    Client.create(req.body.client)
    .then(client => Client.find({}))
    // .populate('propertys')
    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  })

  .put((req, res) => {
    Client.findByIdAndUpdate(req.body.client._id, { $set: req.body.client }, { new: true })
    .then(updated => Client.find({}))
    // .populate('propertys')
    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  });


router.route('/:id')
   .get((req, res) => {
     Client.findOne({ _id: req.params.id })
     .populate('propertys')
     .then((client) => {
       console.log('client: ', client);
       res.send(client);
     })
     .catch(err => res.status(400).send(err));
   })

   .delete((req, res) => {
     console.log('req.params.id: ', req.params.id);
     Client.findByIdAndRemove(req.params.id)
     .then(client => Client.find({}))
    //  .populate('propertys')
     .then(allClients => res.send(allClients))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
