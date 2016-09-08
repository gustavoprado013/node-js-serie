var express = require('express');

var router = express.Router();

var productController = require('../controllers/productController');

router.get('/', function (req, res) {
  productController.list(function (resp) {
    res.json(resp);
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
