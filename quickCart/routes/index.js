var express = require('express')
var router = express.Router()
const passport = require('passport')

router.get('/', function (req, res, next) {
  res.redirect('/categories')
})

router.get(
  '/auth/google',
  passport.authenticate(
    'google',
    {
      scope: ['profile', 'email']
    }
  )
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/categories',
    failureRedirect: '/categories'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/categories')
  })
})

module.exports = router
