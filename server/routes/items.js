const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/customer/item", (req, res) => {
  console.log(models.item);
  models.item.findAll().then(items => {
    res.json(items);
  });
});

// Created successful post that outputs 'quantity' info. Still need to get it to subtract 1 every time the route is hit but don't know how I would update the database without using a 'post' request.
router.post("/customer/item/:itemId/purchases", (req, res) => {
  console.log(req.params.itemId);
  models.item.findById(req.params.itemId).then(item => {
    let costInCents = item.cost;
    let customerMoney = models.customer.money;
    let itemQuantity = item.quantity;

    if (customerMoney >= costInCents && itemQuantity >= 1) {
      let change = customerMoney - costInCents;
      item.update(itemQuantity - 1).then(item => {
        res.json({
          status: "success",
          data: item
        });
      });
    } else {
      res.send("Not enough change. Goodbye.");
    }
  });
});

module.exports = router;
