'use strict'
const store = require('../store')

const gameOnSuccess = function (data) {
  if (data.game) {
    console.log(data.game)
  } else {
    console.table(data.game)
  }
}

const gameOnError = function (response) {
  console.error(response)
}

const gameOnUpdateSuccess = function (data) {
  console.log(data)
  console.log('You successfully updated the game!')
}

const gameOnPostSuccess = function (data) {
  store.game = data.game
  console.log(store.game)
  console.log('Congrats. Game successfully added.')
}

module.exports = {
  gameOnSuccess,
  gameOnError,
  gameOnUpdateSuccess,
  gameOnPostSuccess
}
