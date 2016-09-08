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
  var newUser = new User();
  newUser.name = name;
  newUser.password = newUser.generatePassword(password);

  User.findOne(newUser, function (err, user) {
    if(err){
      callback('Error');
    }else if(user){
      callback(user.token);
    }else{
      callback('User not exists');
    }
  });
}

exports.list = function (token, callback) {
  User.find({'token':token}, function (err, user) {
    if(err){
      callback('Error');
    }else if (user) {
      callback(user.name);
    }else{
      callback('User not found');
    }
  });
}
