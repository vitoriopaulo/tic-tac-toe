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

// Defining the game being played
const onClickGameBoard = function (event) {
  // Outputing the result of the game once it ends
  const gameResult = function () {
    if ((game[0] === 'X' && game[4] === 'X' && game[8] === 'X') ||
       (game[2] === 'X' && game[4] === 'X' && game[6] === 'X') ||
       (game[0] === 'X' && game[1] === 'X' && game[2] === 'X') ||
       (game[3] === 'X' && game[4] === 'X' && game[5] === 'X') ||
       (game[6] === 'X' && game[7] === 'X' && game[8] === 'X') ||
       (game[0] === 'X' && game[3] === 'X' && game[6] === 'X') ||
       (game[1] === 'X' && game[4] === 'X' && game[7] === 'X') ||
       (game[2] === 'X' && game[5] === 'X' && game[8] === 'X')) {
      console.log('Player1 is the Winner! Congrats! :)!')
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
      console.log('Player2 is the Winner! Congrats! :)!')
      $('#result-message').text('Player2 is the Winner! Congrats! :)!')
      return 'Player2 is the Winner! Congrats! :)!'
    } else if (click === 8) {
      console.log('There is no Winner at this time. Game is a draw, try again :(')
      $('#result-message').text('There is no Winner at this time. Game is a draw, try again :(')
      return 'There is no Winner at this time. Game is a draw, try again :('
    }
  }
  // Avoiding one of the players to click in a box that have been already
  // clicked. Outputing a message on the screen to say that the box has been
  // already clicked and instructing the player to click in another box.
  if (game[$(this).attr('id')] === player1 ||
    game[$(this).attr('id')] === player2) {
    $('#result-message').text('Box already selected. Click on an empty box.')
    return false
  }
  // Defining the turns of the players and the update on the game board when
  // the player clicks on an square
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
  gameResult()

  // Working on the click accumulator
  click += 1
}
// Defining a function  to reset the game board
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
  $('#result-message').text('Player 1 starts:')
}

// Starting a new game
$('#new-game').click(resetGameBoard)

module.exports = {
  onClickGameBoard
}
