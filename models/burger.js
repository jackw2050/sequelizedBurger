'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};






var burger = {
    all: function(cb) {
              User.findAll().then(function(burgerData) {
            console.log("users " + burgerData[0].burger_name);
            console.log(JSON.stringify(burgerData, null, 2));
            cb(res);
        })
     /*   orm.all('burgers', function(res) {
            cb(res);

        });

*/




    },
    //cols and vals are arrays
    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('burgers', condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
