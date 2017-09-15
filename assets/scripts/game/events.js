'use strict'

const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetGames = function (event) {
  event.preventDefault()

  gamesApi.getGames()
    .then(gamesUi.gameOnSuccess)
    .catch(gamesUi.gameOnError)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  gamesApi.updateGame(data)
    .then(gamesUi.gameOnUpdateSuccess)
    .catch(gamesUi.gameOnError)
    // console.log('Please provide a game id!')
}

const onCreateGame = function (event) {
  event.preventDefault()
console.log('Is OnCreateGame Working?')
  const data = getFormFields(event.target)
  gamesApi.createGame(data)
    .then(gamesUi.gameOnPostSuccess)
    .catch(gamesUi.gameOnError)
    // console.log('Your new game was successfully added!')
}

// const store = require('../store')
//
// $(() => {
//   $('.box').click(onClickGameBoard)
// })

// Defining the players of the game
const player1 = 'X'
const player2 = 'O'

// Defining a variable that represents the game
let game =
  [ ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' ']

// Defining an accumulattor for the clicks of the ongoing game
let click = 0

// Defining the game being played and all events associated
const onClickGameBoard = function (event) {
  // Setting up the possible results of the game once it is over
  const gameIsOver = function () {
    if ((game[0] === 'X' && game[4] === 'X' && game[8] === 'X') ||
       (game[2] === 'X' && game[4] === 'X' && game[6] === 'X') ||
       (game[0] === 'X' && game[1] === 'X' && game[2] === 'X') ||
       (game[3] === 'X' && game[4] === 'X' && game[5] === 'X') ||
       (game[6] === 'X' && game[7] === 'X' && game[8] === 'X') ||
       (game[0] === 'X' && game[3] === 'X' && game[6] === 'X') ||
       (game[1] === 'X' && game[4] === 'X' && game[7] === 'X') ||
       (game[2] === 'X' && game[5] === 'X' && game[8] === 'X')) {
      // console.log('Player1 is the Winner! Congrats! :)!')
      // store.game.over = true
      $('#result-message').text('Player1 is the Winner! Congrats! :)!')
      return 'Player1 is the Winner! Congrats! :)!'
    } else if ((game[0] === 'O' && game[4] === 'O' && game[8] === 'O') ||
                (game[2] === 'O' && game[4] === 'O' && game[6] === 'O') ||
                (game[0] === 'O' && game[1] === 'O' && game[2] === 'O') ||
                (game[3] === 'O' && game[4] === 'O' && game[5] === 'O') ||
                (game[6] === 'O' && game[7] === 'O' && game[8] === 'O') ||
                (game[0] === 'O' && game[3] === 'O' && game[6] === 'O') ||
                (game[1] === 'O' && game[4] === 'O' && game[7] === 'O') ||
                (game[2] === 'O' && game[5] === 'O' && game[8] === 'O')) {
      // console.log('Player2 is the Winner! Congrats! :)!')
      // store.game.over = true
      $('#result-message').text('Player2 is the Winner! Congrats! :)!')
      return 'Player2 is the Winner! Congrats! :)!'
    } else if (click === 9) {
      // console.log('There is no Winner at this time. Game is a draw, try again :(')
      // store.game.over = true
      $('#result-message').text('There is no Winner at this time. Game is a draw, try again :(')
      return 'There is no Winner at this time. Game is a draw, try again :('
    }
  }

  // else play the game
  if (gameIsOver()) {
    console.log('This is the id:', game[$(this).attr('id')])
    $('#result-message').text('Game Over. Start new game. :)')
    return false
  } else if (game[$(this).attr('id')] === player1 ||
  game[$(this).attr('id')] === player2) {
    console.log('This is the id:', game[$(this).attr('id')])
    $('#result-message').text('Box already selected. Click on an empty box.')
    return false
  }

  // Defining the turns of the players and the update on the game board when
  // the player clicks on an square.

  if (click % 2 === 0) {
    console.log('It is player2 turn now.')
    $('#result-message').text('It is player2 turn now.')
    $(this).append("<img class='img' src='https://i.imgur.com/9AsTwDZ.jpg' />")
    game[$(this).attr('id')] = 'X'
    $(this).attr('id')
    console.log($(this).attr('id'))
  } else if (click % 2 === 1) {
    console.log('It is player1 turn now.')
    $('#result-message').text('It is player1 turn now.')
    $(this).append("<img class='img' src='https://i.imgur.com/DiXKSpi.jpg' />")
    game[$(this).attr('id')] = 'O'
    $(this).attr('id')
    console.log($(this).attr('id'))
  }
  // Outputing the result of the game
  gameIsOver()

  // Working on the click accumulator
  click += 1
}

// Defining a function  to reset the game board when the user click the
// New Game botton in the interface of the web application
const resetGameBoard = function () {
  // resetting the click
  click = 0
  // resetting the images
  $('.img').remove()
  // resetting the Os and Xs and empty spaces of the game
  game =
  [ ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' ']
  // resetting the messages
  $('#result-message').text('New Game. Have fun! Player X starts. :)')
}

// Starting a new game

$('#new-game').click(resetGameBoard)

module.exports = {
  onClickGameBoard,
  onGetGames,
  onUpdateGame,
  onCreateGame
}
