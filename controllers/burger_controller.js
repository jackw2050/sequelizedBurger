/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burgers : data}
	//console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req,res) {
	//console.log(req.body);
	burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burgers')
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