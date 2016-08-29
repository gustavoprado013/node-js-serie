var app = require('./config/app.config');
var db = require('./config/db.config');

var Product = require('./models/product');
var productController = require('./controllers/product.controller');

app.get('/product', function (req, res) {
  var product = "API de Produtos";

  res.json(product);
});

//Routes

app.get('/products', function (req, res) {
  productController.list(function (resp) {
    res.json(resp);
  });
});

app.post('/register', function (req, res) {
  var name = req.body.name;
  var description = req.body.description;
  var price = req.body.price;

  productController.save(name, description, price, function (resp) {
    res.json(resp);
  });
});

app.delete('/deletar/:id', function (req, res) {
  var id = req.params.id;

  productController.delete(id, function (resp) {
    res.json(resp);
  });
});
