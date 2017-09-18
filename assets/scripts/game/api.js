'use strict'
const config = require('../config')
const store = require('../store')

const createGame = function () {
  console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    'game': {
      'cells': [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      'over': false
    }
  })
}

const getGames = function () {
  // console.log('is function getGames working?')
  return $.ajax({
    url: config.apiOrigin + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function () {
  // console.log('is updateGame working?')
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    'game': {
      'cell': {
        'index': ' ',
        'value': ' '
      },
      'over': false
    }
  })
}

module.exports = {
  createGame,
  getGames,
  updateGame
}
