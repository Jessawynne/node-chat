;(function() {
  'use strict'

  const ws = io.connect()

  ws.on('connect', socket => {
    console.log('socket connected')
  })
}());
