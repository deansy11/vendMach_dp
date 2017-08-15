const app = require("../../index");
const request = require("supertest");
const models = require("../../models");
const Item = models.item;

describe("Item routes", () => {
  describe("GET /customer/item - get list of all items", () => {
    it("has successful status code so we know the routes were found", () => {
      return request(app) //from 'app' module.exporter in index.js
        .get("/customer/item")
        .expect(200);
    });

    it("has items from database", () => {
      return Item.create({ description: "Runts", cost: 120, quantity: 10 }).then((item) => {
        return request(app)
        .get("/customer/item")
        .then((res) => {

      })
          expect(res.body.data[0].description).toEqual("Runts");
        })
    });
  })
  describe("POST /customer/item/:itemId/purchases", () => {
    it("has successful status routes", () => {
      return request(app)
        .get("/customer/item/:itemId/purchases")
        .expect(200);
      });
    })
  });





// const app = require("../../index.js");
// // only need to require 'supertest' in the routes tests
// const supertest = require("supertest");
//
//
//
// describe("Item router", () => {
//   describe("Get /api/customer/items - get a list of items", () => {
//     it("has a status key in a json body", () => {
//       return request(app)
//         .get("/api/customer/items")
//         .expect(200);
//     })
//   })
// })
//
// describe("Vending items router", () => {
//   describe("GET /customer/items", () => {
//     it("will return JSON of items", () => {
//       return request(app)
//       .get("/customer/item")
//       .expect(200)
//       .expect((req) => {
//         // req.text.includes("{ 'item' }");
//         return true;
//       });
//     });
//   });
// });
