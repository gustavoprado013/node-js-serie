var express = require('express');
var bodyParser = require('body-parser');

var port = '3442';

var app = express();

app.listen(port, function (req, res) {
  console.log("Escutando na porta: " + port);
});

app.get('/', function (req, res) {

  var api = {
    name: 'API test',
    port: 3442,
    type: "CORS"
  }

  res.json(api);
});
