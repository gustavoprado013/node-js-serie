var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

function getToken(req, res, next) {
  var header = req.headers['authorization'];

  if(typeof header !== 'undefined'){
    req.token = header;
    next();
  }else{
    res.sendStatus(403);
  }
}

router.post('/store', function (req, res) {
  var name = req.body.name;
  var password = req.body.password;

  userController.save(name, password, function (resp) {
    res.json(resp);
  })
});

router.post('/login', function (req, res) {
  var name = req.body.name;
  var password = req.body.password;

  userController.login(name, password, function (resp) {
    res.json(resp);
  })
});

router.get('/list', getToken, function (req, res) {
  var token = req.token;

  userController.list(token, function(resp){
    res.json(resp);
  })
});

module.exports = router;
