var express = require('express');
var router = express.Router();
var [userModel,cartModel] = require('../models/data.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
  userModel({
  	username:req.body.username,
  	password:req.body.password
  }).save().then(result=>{
  	res.send('注册成功')
  })
});

module.exports = router;
