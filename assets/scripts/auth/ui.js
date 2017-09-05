'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Sucessfully signed up!')
  $('#message').text('Sucessfully signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up: email and/or password already token.')
}

const signInSuccess = function (data) {
  console.log('data')
  store.user = data.user
  console.log(store)
  $('#message').text('Sucessfully signed In!')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up: email and/or password already token.')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  console.log('Password sucessfully changed!')
  $('#message').text('Password sucessfully changed.')
}

const changePasswordFailure = function (error) {
  console.log(error)
  console.log('Password already token. Try again.')
  $('#message').text('Password already token. Try again.')
}

const signOutSuccess = function (data) {
  console.log(data)
  store.user = null
  console.log('Signed out succesfully!')
  $('#message').text('Signed out successfully!')
  console.log(store.user)
}

const signOutFailure = function (error) {
  console.log(error)
  console.log('Failure signing out.')
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
