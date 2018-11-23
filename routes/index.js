var express = require('express');
var router = express.Router();
var [userModel,cartModel] = require('../models/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
 //  userModel.create({
	// username: 'zkd',
	// password: 123456
 //  }).then(result=>{
	// // res.redirect("/login");
	
 //  }).catch(error=>{

 //  })

  res.render('index', { title: 'Express' });
});



module.exports = router;
