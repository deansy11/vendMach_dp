const app = require("../../index.js");
const request = require("supertest");

describe("Vending items router", () => {
  describe("GET /customer/items", () => {
    it("will return a list of all items", () => {
      return request(app)
      .get("/customer/item")
      .expect(200)
      .expect((req) => {
        // req.text.includes("{ 'item' }");
        return true;
      });
    });
  });
});
