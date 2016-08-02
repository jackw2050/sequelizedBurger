// Burger Model
// ===============
'use strict';

// EXPORT THIS MODULE TO INDEX.JS
module.exports = function(sequelize, DataTypes) {
  // the model is Character, defined in sequelize
  var Burger = sequelize.define('burgers', {

    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
  }, {
    // you'll be using this in the next class. Ignore it for now
    classMethods: {
      associate: function(models) {
        // IGNORE THIS FOR NOW
      }
    }
  });
  return Burger;
};