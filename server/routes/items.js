const express = require("express");
const router = express.Router();
const models = require("../models");
const Customer = models.customer;

function currentCustomer(callback) {
  Customer.findOne().then(callback);
}

router.get("/customer/item", (req, res) => {
  console.log(models.item);
  models.item.findAll().then(items => {
    res.json(items);
  });
});

router.post("/customer/item/:itemId/purchases", (req, res) => {
  console.log(req.params.itemId);
  models.item.findById(req.params.itemId).then(item => {
    let costInCents = item.cost;
    let customerMoney = models.customer.money;
    let itemQuantity = item.quantity;

    if (customerMoney >= costInCents && itemQuantity > 0) {
      let change = customerMoney - costInCents;
      item.quantity -= 1;
      customer.money -= item.cost;
      item.save().then(() => {
        customer.save().then(() => {
          res.json({
            status: "success",
            data: item
          });
        });
      });
    } else {
      res.send("Not enough change. Goodbye.");
    }
  });
});

module.exports = router;
