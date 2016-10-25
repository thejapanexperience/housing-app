const Board = require('../models/Board')

module.exports = function(app, io){
  io.on('connection', socket => {

    console.log('connected!')

    socket.on('click', data => {
      console.log('data: ', data)

    socket.emit('action', {
        type: 'NEW_DATA',
        payload: {
          data: data.num
        }
      })
    })

    socket.on('sendMessage', board => {
      console.log('board: ', board)
      console.log('board._id: ', board._id)
      Board.findByIdAndUpdate(board._id, {$set: board}, {new: true}).exec()
      .then((data) => socket.emit('action', {
        type: 'GOT_BOARDS',
        payload: {data}
       }))
      // .then((updated) => res.send('ok!\n'))
      .catch((err) => console.log(err))
    })


    socket.on('disconnect', () => {
      console.log('disconnected!');
    })

  })


  // makes io available in the routes
  app.use((req, res, next) => {
    req.io = io
    next()
  })
}
