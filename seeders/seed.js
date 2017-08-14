"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "items",
      [{
        description: "Doritos",
        cost: 85,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Nerds",
        cost: 50,
        quantity: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Rolos",
        cost: 100,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Big Red",
        cost: 55,
        quantity: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Chex Mix",
        cost: 110,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("items", null, {});
  }
};
