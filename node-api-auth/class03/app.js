var app = require('./config/app.config');
var db = require('./config/db.config');
var Product = require('./models/product')

app.get('/', function (req, res) {
  var api = {
    name: 'API test',
    port: 3442,
    type: "CORS"
  }

  res.json(api);
});

app.get('/product', function (req, res) {
  var product = "API de Produtos";

  res.json(product);
});
