var express = require('express');

var router = express.Router();

var productController = require('../controllers/productController');
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

router.get('/', getToken, function (req, res) {
  var token = req.token;

  userController.authorize(token, function (resp) {

    if(resp === true){
      productController.list(function (resp) {
        res.json(resp);
      });
    }else{
      res.sendStatus(403);
    }



  });

});

router.post('/store', function (req, res) {
  var name = req.body.name;
  var description = req.body.description;
  var price = req.body.price;

  productController.save(name, description, price, function (resp) {
    res.json(resp);
  });
});

router.delete('/delete/:id', function (req, res) {
  var id = req.params.id;
  productController.delete(id, function (resp) {
    res.json(resp);
  });
});

module.exports = router;
