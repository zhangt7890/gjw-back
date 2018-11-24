var express = require('express');
var router = express.Router();
var [userModel,cartModel] = require('../models/data.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
  
	userModel.findOne({
	  username: req.body.username,
	  password: req.body.password
	}).then(info=>{
	  if(info){
	  	req.session.userinfo = info;
		res.send(info);
	  }else{
		res.send('null');
	  }
	})

});

module.exports = router;
