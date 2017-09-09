const O = $(this).append("<img src='images/o.jpeg' />")
const X = $(this).append("<img src='images/x.jpeg' />")

const game =
  [ ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' ']

let click = 0

const onClickGameBoard = function (event) {
  if (click % 2 === 0) {
    console.log('It is player1 turn.')
    $(this).append("<img src='images/o.jpeg' />")
    $(this).attr('id')
    console.log($(this).attr('id'))
  } else if (click % 2 === 1) {
    console.log('It is player2 turn')
    $(this).append("<img src='images/x.jpeg' />")
    $(this).attr('id')
    console.log($(this).attr('id'))
  }

  click += 1

  game[$(this).attr('id')] = ' '

  if (click < 5) {
    console.log('Game is being played. No result yet.')
    $('#result-message').text('Game is being played. No result yet.')
    return 'Game is being played. No result yet.'
  } else if ((click >= 5 && click <= 9) && gameWinner() === true) {
    return gameWinner()
  } else if ((click === 9) && gameWinner() !== true) {
    console.log('There is no Winner at this time. Game is a draw, try again :(')
    $('#result-message').text('There is no Winner at this time. Game is a draw, try again :(')
    return 'There is no Winner at this time. Game is a draw, try again :('
  }
}

const gameWinner = function () {
  if ((game[0] === 'O' && game[4] === 'O' && game[8] === 'O') ||
     (game[7] === 'O' && game[5] === 'O' && game[3] === 'O') ||
     (game[0] === 'O' && game[1] === 'O' && game[2] === 'O') ||
     (game[3] === 'O' && game[4] === 'O' && game[5] === 'O') ||
     (game[6] === 'O' && game[7] === 'O' && game[8] === 'O') ||
     (game[0] === 'O' && game[3] === 'O' && game[6] === 'O') ||
     (game[1] === 'O' && game[4] === 'O' && game[7] === 'O') ||
     (game[2] === 'O' && game[5] === 'O' && game[8] === 'O')) {
    console.log('Player1 is the Winner! Congrats! :)!')
    $('#result-message').text('Player1 is the Winner! Congrats! :)!')
    return 'Player1 is the Winner! Congrats! :)!'
  } else if ((game[0] === 'X' && game[4] === 'X' && game[8] === 'X') ||
              (game[7] === 'X' && game[5] === 'X' && game[3] === 'X') ||
              (game[0] === 'O' && game[1] === 'O' && game[2] === 'O') ||
              (game[3] === 'X' && game[4] === 'X' && game[5] === 'X') ||
              (game[6] === 'X' && game[7] === 'X' && game[8] === 'X') ||
              (game[0] === 'X' && game[3] === 'X' && game[6] === 'X') ||
              (game[1] === 'X' && game[4] === 'X' && game[7] === 'X') ||
              (game[2] === 'X' && game[5] === 'X' && game[8] === 'X')) {
    console.log('Player2 is the Winner! Congrats! :)!')
    $('#result-message').text('Player2 is the Winner! Congrats! :)!')
    return 'Player2 is the Winner! Congrats! :)!'
  }
}

const gameWinner = function () {
  if ((game[0] === $(this).append("<img src='images/o.jpeg' />") &&
       game[4] === $(this).append("<img src='images/o.jpeg' />") &&
       game[9] === $(this).append("<img src='images/o.jpeg' />")) ||
      (game[7] === $(this).append("<img src='images/o.jpeg' />") &&
       game[5] === $(this).append("<img src='images/o.jpeg' />") &&
       game[3] === $(this).append("<img src='images/o.jpeg' />")) ||
      (game[3] === $(this).append("<img src='images/o.jpeg' />") &&
       game[4] === $(this).append("<img src='images/o.jpeg' />") &&
       game[5] === $(this).append("<img src='images/o.jpeg' />")) ||
      (game[6] === $(this).append("<img src='images/o.jpeg' />") &&
       game[7] === $(this).append("<img src='images/o.jpeg' />") &&
       game[8] === $(this).append("<img src='images/o.jpeg' />")) ||
      (game[0] === $(this).append("<img src='images/o.jpeg' />") &&
       game[3] === $(this).append("<img src='images/o.jpeg' />") &&
       game[6] === $(this).append("<img src='images/o.jpeg' />")) ||
      (game[1] === $(this).append("<img src='images/o.jpeg' />") &&
       game[4] === $(this).append("<img src='images/o.jpeg' />") &&
       game[7] === $(this).append("<img src='images/o.jpeg' />")) ||
      (game[2] === $(this).append("<img src='images/o.jpeg' />") &&
       game[5] === $(this).append("<img src='images/o.jpeg' />") &&
       game[8] === $(this).append("<img src='images/o.jpeg' />"))) {
    console.log('Player1 is the Winner! Congrats! :)!')
    $('#result-message').text('Player1 is the Winner! Congrats! :)!')
    return 'Player1 is the Winner! Congrats! :)!'
  } else if ((game[0] === $(this).append("<img src='images/x.jpeg' />") &&
              game[4] === $(this).append("<img src='images/x.jpeg' />") &&
              game[9] === $(this).append("<img src='images/x.jpeg' />")) ||
             (game[7] === $(this).append("<img src='images/x.jpeg' />") &&
              game[5] === $(this).append("<img src='images/x.jpeg' />") &&
              game[3] === $(this).append("<img src='images/x.jpeg' />")) ||
             (game[3] === $(this).append("<img src='images/x.jpeg' />") &&
              game[4] === $(this).append("<img src='images/x.jpeg' />") &&
              game[5] === $(this).append("<img src='images/x.jpeg' />")) ||
             (game[6] === $(this).append("<img src='images/x.jpeg' />") &&
              game[7] === $(this).append("<img src='images/x.jpeg' />") &&
              game[8] === $(this).append("<img src='images/x.jpeg' />")) ||
             (game[0] === $(this).append("<img src='images/x.jpeg' />") &&
              game[3] === $(this).append("<img src='images/x.jpeg' />") &&
              game[6] === $(this).append("<img src='images/x.jpeg' />")) ||
             (game[1] === $(this).append("<img src='images/x.jpeg' />") &&
              game[4] === $(this).append("<img src='images/x.jpeg' />") &&
              game[7] === $(this).append("<img src='images/x.jpeg' />")) ||
             (game[2] === $(this).append("<img src='images/x.jpeg' />") &&
              game[5] === $(this).append("<img src='images/x.jpeg' />") &&
              game[8] === $(this).append("<img src='images/x.jpeg' />"))) {
    console.log('Player2 is the Winner! Congrats! :)!')
    $('#result-message').text('Player2 is the Winner! Congrats! :)!')
    return 'Player2 is the Winner! Congrats! :)!'
  }
}

const gamesPlayed = [
//   { game1: [ ],
//     player1: ' ',
//     player2: ' ',
//     result: ' '
//   },
//   { game2: [ ],
//     player1: ' ',
//     player2: ' ',
//     result: ' '
//   },
//   { gameN: [ ],
//     player1: ' ',
//     player2: ' ',
//     result: 'Draw'
//   }
// ]

// const numberOfDraws = function (event) {
//   let countDraws = 0
//   for (let i = 0; gamesPlayed.length; i++) {
//     if (gamesPlayed[i].result === 'Draw') {
//       countDraws++
//     }
//   }
//   return countDraws
//   $(this).append(countDraws)
// }

// const winsPlayer1 = function (event) {
//   let countWins = 0
//   for (let i = 0; gamesPlayed.length; i++) {
//     if (gamesPlayed[i].result === 'Player1 Wins') {
//       countWins++
//     }
//   }
//   return countWins
//   $(this).append(countWins)
// }

// const winsPlayer2 = function (event) {
//   let countWins = 0
//   for (let i = 0; gamesPlayed.length; i++) {
//     if (gamesPlayed[i].result === 'Player2 Wins') {
//       countWins++
//     }
//   }
//   return countWins
//   $(this).append(countWins)
// }

// const totalGames = function (event) {
//   $(this).append(gamesPlayed.length)
// }

//If the game is over and any of the players attempt to click on any square,
// a message on top of the game is outputted, saying that game is over and
// encourages the players to start a new game
// const gameIsOver = function () {
//   if ((game[$(this).attr('id')] === player1 ||
//   game[$(this).attr('id')] === player2 || game[$(this).attr('id')] === ' ') && gameResult() === true) {
//   $('#result-message').text('Game is over! Start a new game! :)')
//   return false
// }
module.exports = {
  onClickGameBoard
}
