class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  findItemByName(name) {
    // Search stock for a toy object where toy.name matches the name parameter
    return this.stock.filter((item) => item.name === name)[0];
  }

  processProductSale(name) {
    const toy = this.findItemByName(name);

    // TODO: decrement the store's stock of the toy and increase the store's
    // revenue IF the toy's count is > 0.

    //TODO: log a message saying the item was purchased IF count > 0

    // TODO: log a message saying the item is out of stock IF count <= 0
  }

  replenishStock(name, count) {
    const toy = this.findItemByName(name);

    // TODO: increase the store's stock of the toy by the count param

    console.log(`Replenished ${toy.name} by ${count}`);
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
