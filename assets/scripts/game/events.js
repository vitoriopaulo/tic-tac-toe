
// const player = {
// player1: 'O',
// player2: 'X'
// }

const click = function () {
  $("div[id^='index']").append("<img src='images/o.jpeg' />")
}

// let game = function (click, player){
//   [ ' ', ' ', ' ',
//   ' ', ' ', ' ',
//     ' ', ' ', ' ']
//   }

//  let game = function (click, player){
//    click().player1
//    click().player2
//   }
//
// const gameWinner = {
//   winnerPlayer1: [
//   ['O', ' ', ' ',
//    ' ', 'O', ' ',
//    ' ', ' ', 'O'],
//
//    [' ', ' ', 'O',
//     ' ', 'O', ' ',
//     'O', ' ', ' '],
//
//    ['O', 'O', 'O',
//      ' ', ' ', ' ',
//      ' ', ' ', ' '],
//
//    [' ', ' ', ' ',
//     'O', 'O', 'O',
//     ' ', ' ', ' '],
//
//    [' ', ' ', ' ',
//     ' ', ' ', ' ',
//     'O', 'O', 'O'],
//
//    ['O', ' ', ' ',
//     'O', ' ', ' ',
//     'O', ' ', ' '],
//
//    [' ', 'O', ' ',
//     ' ', 'O', ' ',
//     ' ', 'O', ' '],
//
//    [' ', ' ', 'O',
//     ' ', ' ', 'O',
//     ' ', ' ', 'O'],
// ],
//
// winnerPlayer2: [
//   ['X', ' ', ' ',
//    ' ', 'X', ' ',
//    ' ', ' ', 'X'],
//
//    [' ', ' ', 'X',
//     ' ', 'X', ' ',
//     'X', ' ', ' '],
//
//    ['X', 'X', 'X',
//     ' ', ' ', ' ',
//     ' ', ' ', ' '],
//
//    [' ', ' ', ' ',
//     'X', 'X', 'X',
//     ' ', ' ', ' '],
//
//    [' ', ' ', ' ',
//     ' ', ' ', ' ',
//     'X', 'X', 'X'],
//
//    ['X', ' ', ' ',
//     'X', ' ', ' ',
//     'X', ' ', ' '],
//
//    [' ', 'X', ' ',
//     ' ', 'X', ' ',
//     ' ', 'X', ' '],
//
//    [' ', ' ', 'X',
//     ' ', ' ', 'X',
//     ' ', ' ', 'X'],
//   ]
// }
// //Defining a click accumulator
//
// const clicks = 0
//
// const click = function () {
//  $("div[id^='index']").on('click', player)
// }
//
// // while (clicks < 5) {
// //   console.log('Game is being played')
// //   clicks += 1
// // }
// // return clicks
// // }
// //
// // if (clicks >= 5 && <=9) {
// //   console.log("Game Over!")
// // }
//
// const newGame = function (game, player) {
// this.player1.$(this.click)
// this.player2.$(this.click)
// }
//
// // var indices = [];
// // var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// // var element = 'a';
// // var idx = array.indexOf(element);
// // while (idx != -1) {
// //   indices.push(idx);
// //   idx = array.indexOf(element, idx + 1);
// // }
// // console.log(indices);
// // // [0, 2, 4]
//
// // Writing code to compare the game played with the games that defines a
// //winner, so we can output a result.
// const gameResult = function (newGame, gameWinner) {
// if (newGame.indexOf(this.player1) === winner.winnerPlayer1['0']) {
//   console.log('Player 1 is the winner! Congrats.')
//   $('#result-message').text('Player 1 is the winner! Congrats.')
//   return 'Player 1 is the winner! Congrats.'
// } else (newGame.indexOf(this.player2) === winner.winnerPlayer2['X']) {
//   console.log('Player 2 is the winner! Congrats.')
//   $('#result-message').text('Player 2 is the winner! Congrats.')
//   return 'Player 2 is the winner! Congrats.'
// } else if {
//   console.log('Game result is a draw. No one won this time. :(')
//   $('#result-message').text('Game result is a draw. No one won this time. :(')
//   return 'Game result is a draw. No one won this time. :('
// }
// }
