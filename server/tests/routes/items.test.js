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
      it("returns 201 on success", () => {
        return Item.create({
          description: "Runts",
          cost: 120,
          quantity: 10
        }).then(item => {
          Customer.create({
            money: 140
          }).then(customer => {
            console.log(customer);
            request(app).post(`/customer/item/${item.id}/purchases`, {});
            expect(201);
          });
        });
      });

      it("responds with status: success when customer has enough money", () => {
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
              .then(res => {
                expect(res.body.status).toBe("success");
              });
          });
        });
      });

      it("responds with status: fail when customer has too little money", () => {
        return Item.create({
          description: "Runts",
          cost: 120,
          quantity: 10
        }).then(item => {
          Customer.create({
            money: 4
          }).then(customer => {
            request(app)
              .post(`/customer/item/${item.id}/purchases`, {})
              .then(res => {
                expect(res.body.status).toBe("fail");
              });
          });
        });
      });
      it("responds with status: fail when quantity is zero", () => {
        return Item.create({
          description: "Runts",
          cost: 120,
          quantity: 0
        }).then(item => {
          Customer.create({
            money: 140
          }).then(customer => {
            console.log(customer);
            request(app)
              .post(`/customer/item/${item.id}/purchases`, {})
              .then(res => {
                expect(res.body.status).toBe("fail");
              });
          });
        });
      });
      it("reduces the quantity by one", () => {
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
              .then(res => {
                Item.findById(item.quanityt).then(updatedItem => {
                  expect(updatedItem.quantity).toBe(item.quantity - 1);
                });
              });
          });
        });
      });
      it("reduces the customer money by item cost", () => {
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
              .then(res => {
                Customer.findById(customer.id).then(updatedCustomer => {
                  expect(updatedCustomer.money).toBe(
                    customer.money - item.cost
                  );
                });
              });
          });
        });
      });
    });
  });
});
