var express = require('express');
var router = express.Router();
var [userModel,cartModel] = require('../models/data.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
  userModel.findOne({
  	username:req.body.username,
  	password:req.body.password
  }).then(result=>{
  	res.send('登录成功');
  }).catch(err=>{
  	res.send('用户名不存在');
  })
});

module.exports = router;
