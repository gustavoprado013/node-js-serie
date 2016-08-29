var app = require('./config/app.config');
var db = require('./config/db.config');

var Product = require('./models/product');
var productController = require('./controllers/productController');

var products = require('./routes/productRouter');

app.get('/', function (req, res) {
  var product = "API de Produtos - /products - /store - /delete:id";

  res.json(product);
});

app.use('/products', products);
