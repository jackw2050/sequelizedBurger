//var config = "developmentConfig";
var config = "productionConfig";


var Sequelize = require('sequelize'),
    mysql = require('mysql');


if (config == "productionConfig") {
    var connection = new Sequelize('wlmu9u7lfbmgmuag', 'rpez98m8pfedim3k', 'mn0h26rmwvenxi9p', {
        host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },


    });
} else if (config == "developmentConfig") {
    //var sequelize = new Sequelize("postgres://root:Koisuru2050@localhost:5432/burger_db");  
    var connection = new Sequelize('burger_db', 'root', 'Koisuru2050', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },


    });
}



connection
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function(err) {
        console.log('Inable to connect to the database:'.err);
    });


// SOLUTION: Sync our models
models.sequelize.sync({force:false}) // {force:true} drops the table everytime the server starts.

// Solution: Create our Manager in a .then callback
// ================================================
.then(function(){

	return models.burgers.create({
		burger_name: "Brad Lakes",
		devoured: false,	
	})

})


module.exports = connection;
