var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String
});
var userModel = mongoose.model('users',userSchema);

var cartSchema = new mongoose.Schema({
	userid: String,
	productid: String,
	count: Number
});
var cartModel = mongoose.model('carts',cartSchema);


module.exports = [userModel,cartModel];