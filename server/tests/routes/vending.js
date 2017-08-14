const app = require("../../index.js");
const request = require("supertest");

describe("Vending items router", () => {
  describe("GET /customer/items", () => {
    it("will return a list of all items", () => {
      request(app)
      .get("/customer/items")
      .expect(200)
      .expect((req) => {
        req.text.includes("{ "items" : [{"description"}] }");
        return true;
      });
    });
  });
});
