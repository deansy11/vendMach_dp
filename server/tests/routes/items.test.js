const app = require("../../index");
const request = require("supertest");
const models = require("../../models");
const Item = models.item;
const Customer = models.customer;

describe("Item", () => {
  // test will clear data and return to original state after each test
  afterEach(() => {
    return Item.destroy({ where: {} });
  });

  describe("Item routes", () => {
    describe("GET /customer/item - get list of all items", () => {
      it("has successful status code so we know the routes were found", () => {
        return request(app) //from 'app' module.exporter in index.js
          .get("/customer/item")
          .expect(200);
      });

      it("has items from database", () => {
        return Item.create({
          description: "Runts",
          cost: 120,
          quantity: 10
        }).then(item => {
          return request(app).get("/customer/item").then(res => {});
          expect(res.body.data[0].description).toEqual("Runts");
        });
      });
    });
    describe("POST /customer/item/:itemId/purchases", () => {
      it("renders item and customer info", () => {
        return Item.create({
          description: "Runts",
          cost: 120,
          quantity: 10
        }).then(item => {
          Customer.create({
            money: 140
          }).then(customer => {
            console.log(customer);
            request(app)
              .post(`/customer/item/${item.id}/purchases`, {})
              console.log(item.quantity);
              .then(res => {
                expect(res.body.status).toBe("Success");
              });
          });
        });
      });
      })
    });
  });
