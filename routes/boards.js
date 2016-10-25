const express = require('express');
const router = express.Router();

const Board = require('../models/Board')

router.route('/')
  .get((req, res) => {
    Board.find({}).exec()
    .then((boards) => {
      console.log('boards: ', boards)
      res.send(boards)
    })
    .catch((err) => res.status(400).send(err))
  })

   // put back braces on Board.create if I want a console.log
   .post((req, res) => Board.create(req.body.board)
      .then((board) => Board.find({}).exec())
      .then((allBoards) => res.send(allBoards))
      .catch((err) => res.status(400).send(err)))

   .put((req, res) => {
     console.log('req.body.board.id: ', req.body.board._id)
     console.log('req.body.board: ', req.body.board)
     Board.findByIdAndUpdate(req.body.board._id, {$set: req.body.board}, {new: true}).exec()
     .then((updated) => res.send(updated))
     .catch((err) => res.status(400).send(err))
   })

   router.route('/:id')
   .get((req, res) => {
     Board.findOne({ name: req.params.id }).exec()
     .then((board) => res.send(board))
     .catch((err) => res.status(400).send(err))

 // .get((req, res) => {
 //   Board.find({}, (err, boards) => {
 //     console.log('boards: ', boards)
 //     res.status(err ? 400 : 200).send(err || boards)
 //   })
 // })

 // .post((req, res) => {
 //   Board.create(req.body.board, (err, boards) => {
 //     Board.find({}, (err, boards) => {
 //       res.status(err ? 400 : 200).send(err || boards)
 //     })
 //   })
 // })



  //  Board.findOne({ name: req.params.id },(err,board) => {
  //    console.log('in get by id');
  //    console.log('board: ', board)
  //    res.status(err ? 400 : 200).send(err || board)
  //  })
 })

module.exports = router;
