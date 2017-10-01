'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Sucessfully signed up! Sign In and start playing! :)')
  $('#message').text('Sucessfully signed up! Sign In and start playing! :)')
  $('.my-input').val("")
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up: email and/or password already token. Try again with different credentials.')
  $('.my-input').val("")
}

const signInSuccess = function (data) {
  $('.signed-in-page').show()
  $('.starting-page').hide()
  $('.box').hide()
  // $('#sign-up').reset()
  console.log('data')
  store.user = data.user
  console.log(store)
  $('#message').text('Sucessfully signed In! Click on botton New Game and start playing! No worries, gameboard will load. Have fun! :)')
  $('.my-input').val("")
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in: wrong email and/or password. Try again.')
  $('.my-input').val("")
}

const changePasswordSuccess = function (data) {
  console.log(data)
  // console.log('Password sucessfully changed!')
  $('#message').text('Password sucessfully changed!')
  $('.my-input').val("")
}

const changePasswordFailure = function (error) {
  console.log(error)
  // console.log('Password already token. Try again.')
  $('#message').text('Password already token. Try again.')
  $('.my-input').val("")
}

const signOutSuccess = function (data) {
  $('.starting-page').show()
  $('.signed-in-page').hide()
  console.log(data)
  store.user = null
  // console.log('Signed out succesfully!')
  $('#message').text('Signed out successfully!')
  console.log(store.user)
}

const signOutFailure = function (error) {
  console.log(error)
  // console.log('Failure signing out.')
  $('#message').text('Failure signing out.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
