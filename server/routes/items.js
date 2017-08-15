const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/customer/item", (req, res) => {
  console.log(models.item);
  models.item.findAll()
  .then((items) => {
    res.json(items)
  })
})

// router.post("/customer/items/:itemId/purchases", (req, res) => {
//   models.item.findById(:id).then(() => {
//
//   })
// })

module.exports = router;
