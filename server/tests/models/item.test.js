const app = require("../../index");
const request = require("supertest");
const db = require("../../models");
const Item = db.item;

describe("Item routes", () => {
  console.log("In here?");
  describe('GET /customer/item - get list of all items', () => {
    it('has successful status code so we know the routes were found', () => {
      return request(app) //from 'app' module.exporter in index.js
        .get("/customer/item")
        .expect(200);
    })
  })

//   it('can be persisted', () => {
//     Item.create({description : "Skittles", cost: 75, quantity: 10}).then(item) => {
//       expect(item.id).toBeTruthy();
//       // remove item from database
//       return item.destroy();
//     }
//   })
})
