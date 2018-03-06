const router = require('express').Router();
const tweetBank = require('../tweetBank.js')

router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets } );
  });
  
  module.exports = router; 