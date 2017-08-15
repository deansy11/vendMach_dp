'use strict';
module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define('vendor', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.vendor.hasMany(models.item, {foreignKey: "itemId"});
        models.vendor.hasMany(models.customer, {foreignKey: "customerId"});
      }
    }
  });
  return vendor;
};
