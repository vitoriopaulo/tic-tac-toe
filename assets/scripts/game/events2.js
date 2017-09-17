// 'use strict'
//
// const gamesApi = require('./api.js')
// const gamesUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')
//
// // get in the habit of naming your handlers, it eases debugging.
// //
// // also, follow a convention for handlers. here, I name my handler
// // beginning with 'on' to denote that it is done when the GET /books
// // button is clicked
// const onGetGames = function (event) {
//   event.preventDefault()
//
//   gamesApi.getGames()
//     .then(gamesUi.gameOnSuccess)
//     .catch(gamesUi.gameOnError)
// }
//
// const onUpdateGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   gamesApi.updateGame(data)
//     .then(gamesUi.gameOnUpdateSuccess)
//     .catch(gamesUi.gameOnError)
//     // console.log('Please provide a game id!')
// }
//
// const onCreateGame = function (event) {
//   event.preventDefault()
//   console.log('Is OnCreateGame Working?')
//   const data = getFormFields(event.target)
//   gamesApi.createGame(data)
//     .then(gamesUi.gameOnPostSuccess)
//     .catch(gamesUi.gameOnError)
//     // console.log('Your new game was successfully added!')
// }
//
// module.exports = {
//   onGetGames,
//   onUpdateGame,
//   onCreateGame
// }
