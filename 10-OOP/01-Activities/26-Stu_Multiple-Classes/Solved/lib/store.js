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
    // Decrement count and increase revenue IF toy is in stock
    if (toy.count > 0) {
      toy.count--;
      this.revenue += toy.price;
      console.log(`Purchased ${name} for ${toy.price}.`);
    } else {
      console.log(`${name} is out of stock.`);
    }
  }

  replenishStock(name, count) {
    const toy = this.findItemByName(name);
    // Increase the store's stock of the toy by the count param
    toy.count += count;
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
