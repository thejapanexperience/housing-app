const express = require('express');
const router = express.Router();

const ChosenBoard = require('../models/ChosenBoard')

router.route('/')

.get((req, res) => {
  ChosenBoard.find({}, (err, boards) => {
    res.status(err ? 400 : 200).send(err || boards)
  })
})

.post((req, res) => {
  ChosenBoard.create(req.body.board)
   .then(board => {
     res.send(board)
   })
   .catch(err => {
     res.status(400).send(err)
   })
})

module.exports = router;
