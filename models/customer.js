'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.customer.hasMany(models.item, {foreignKey: 'itemId'});
        models.customer.belongsTo(models.vendor, {foreignKey: 'vendorId'});
      }
    }
  });
  return customer;
};
