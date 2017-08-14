'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return customer;
};