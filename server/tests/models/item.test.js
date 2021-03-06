const db = require("../../models");
const Item = db.item;

describe('Item', () => {
  // test will clear data and return to original state after each test
  afterEach(() => {
    return Item.destroy({ where: {} })
  });

  it("can be saved to database", () => {
    return Item.create({ description: "Runts", cost: 120, quantity: 10}).then((item) => {
      expect(item.id).toBeTruthy();
    })
  });

});
