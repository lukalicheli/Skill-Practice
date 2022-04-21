const Store = require("../lib/store");

describe("Store class", () => {
  describe("processProductSale method", () => {
    // TODO: remove .skip when you are ready to work on this test
    it.skip("decrements count", () => {
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 1 },
      ]);
      store.processProductSale("Action Figure");
      expect(store.stock[0].count).toBe(0);
    });

    // TODO: remove .skip when you are ready to work on this test
    it.skip("increases revenue", () => {
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 2 },
      ]);
      store.processProductSale("Action Figure");
      store.processProductSale("Action Figure");
      expect(store.revenue).toBe(10);
    });
    
    // TODO: remove .skip when you are ready to work on this test
    it.skip("does nothing when the toy is out of stock", () => {
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 0 },
      ]);
      store.processProductSale("Action Figure");
      expect(store.revenue).toBe(0);
      expect(store.stock[0].count).toBe(0);
    });
  });

  describe("replenishStock method", () => {
    // TODO: remove .skip when you are ready to work on this test
    it.skip("increases count", () => {
      const store = new Store("Big Al's Toy Barn", [
        { name: "Action Figure", price: 5.0, count: 1 },
      ]);
      store.replenishStock("Action Figure", 2);
      expect(store.stock[0].count).toBe(3);
    });
  });
});
