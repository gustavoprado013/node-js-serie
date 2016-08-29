var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/API';

mongoose.connect(urlString, function (err, res) {
  if(err){
    console.log('Erro de Conexão - ' + urlString);
  }else{
    console.log('Conectado: ' + urlString);
  }
});
