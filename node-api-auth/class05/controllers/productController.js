var Product = require('../models/product');

exports.save = function (name, description, price, callback) {
  new Product({
    'name': name,
    'description': description,
    'price': price
  }).save(function (error, product) {
    if(error){
      callback({error: 'Não foi possivel Salvar'});
    }else{
      callback(product);
    }
  });
}

exports.list = function (callback) {
  Product.find({}, function (error, products) {
    if(error){
      callback({error: 'Não foi possivel listar'})
    }else{
      callback(products)
    }
  });
}

exports.delete = function (id, callback) {
  Product.findById(id, function (error, produto) {
    if(error){
      callback({error: 'Não foi possivel excluir'});
    }else{
      produto.remove(function (error) {
        if(!error){
          callback({resposta: "Produto excluido"});
        }
      });
    }
  })
}
