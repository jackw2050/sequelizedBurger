/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//var orm = require('../config/orm.js');

var devMode = false;
router.get("/", function(request, response){
    response.redirect('/burger')
})

router.get('/burger', function(request, response) {
    burger.all(function(data) {
        var hbsObject = { burger: data }
        console.log(hbsObject)
        response.render('index', hbsObject);
    });
});

router.post('/burger/create', function(request, response) {
    request.body.devoured = 0;
    console.log("router.post burger/create");
    console.log("request body " + request.body.burger_name);
    console.log("exiting controller ---> burger.create\n");
    burger.create(['burger_name', 'devoured'], [request.body.burger_name, request.body.devoured], function(data) {
        response.redirect('/burger');
    });
});

// This takes input from the web page (the devour it button) and updates the database
router.put('/burger/update/:id', function(request, response) {
    var condition = 'id = ' + request.params.id;
    console.log("router.put burger/update");
    console.log('condition', condition);

    burger.update({ 'devoured': request.body.devoured }, condition, function(data) {
        response.redirect('/burger');
    });
});


module.exports = router;
