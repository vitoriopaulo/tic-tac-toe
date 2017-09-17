'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// const gameEvents2 = require('./game/events2')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  authEvents.addHandlers()
  $('.signed-in-page').hide()
  $('.box').click(gameEvents.onClickGameBoard)
  $('.box').click(gameEvents.onUpdateGame)
  $('#new-game').click(gameEvents.onCreateGame)
  // $('').text(gameEvents.onGetGames)
})
