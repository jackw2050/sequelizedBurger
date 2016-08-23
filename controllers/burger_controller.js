/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
//var burger = require('../models/burger.js');
var models  = require('../models');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	models.Burger.findAll(
		{//include: [ models.Burger ]
		}).then(function(burgerData) {
		var hbsObject = {burgers : burgerData}
	console.log(JSON.stringify(burgerData, null, 2));
		res.render('index', hbsObject);
	});
});



router.post('/burgers/create', function(req,res) {

  models.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.params.devoured
  })
  .then(function() {
    res.redirect('/');
  });

});





router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

//	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	burger.delete(condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;
