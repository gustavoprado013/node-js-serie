var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  password: String,
  token: String
});

UserSchema.methods.generatePassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.generateToken = function (name, password) {
  return jwt.sign({'name': name, 'password': password}, 'secret');
}

module.exports = mongoose.model('User', UserSchema);
