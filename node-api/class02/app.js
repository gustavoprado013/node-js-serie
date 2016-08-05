var app = require('./config/app.config');
var db = require('./config/db.config');
var User = require('./models/user')

app.get('/', function (req, res) {
  var api = {
    name: 'API test',
    port: 3442,
    type: "CORS"
  }

  res.json(api);
});
