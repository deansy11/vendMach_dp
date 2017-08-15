'use strict';
module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define('item', {
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.item.belongsTo(models.vendor, {foreignKey: 'vendorId'});
      }
    }
  });
  return item;
};
