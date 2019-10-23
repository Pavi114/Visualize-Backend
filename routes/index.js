var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/users/cools', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/cool', function(req, res){
  res.send('I am Cool!!');
});

module.exports = router;
