var User = require('../models/user');

exports.save = function (name, password, callback) {

  User.findOne({'name': name}, function (err, user) {
    if(err){
      callback('Error');
    }else if(user){
      callback('User exists')
    }else{
      var newUser = new User();
      newUser.name = name;
      newUser.password = newUser.generatePassword(password);
      newUser.token = newUser.generateToken(name, password);
      newUser.save(function (err, user) {
        if(err){
          callback('Error');
        }else{
          callback(user);
        }
      });
    }
  });

}

exports.login = function (name, password, callback) {

  User.findOne({'name':name}, function (err, user) {
    if(err){
      callback('Error');
    }else if(user){
      if(user.validatePassword(password)){
        callback(user.token);
      }else{
        callback('Wrong password');
      }
    }else{
      callback('User not exists');
    }
  });
}

exports.list = function (token, callback) {
  User.findOne({'token':token}, function (err, user) {
    if(err){
      callback('Error');
    }else if (user) {
      callback({'name': user.name});
    }else{
      callback('User not found');
    }
  });
}

exports.authorize = function (token, callback) {
  User.findOne({'token':token}, function (err, user) {
    if(err){
      callback('Error');
    }else if (user) {
      callback(true);
    }else{
      callback(false);
    }
  });
}
