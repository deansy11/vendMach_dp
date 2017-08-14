'use strict';
module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define('vendor', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vendor;
};