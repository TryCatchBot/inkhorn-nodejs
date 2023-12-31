const EventEmitter = require("node:events")


class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping); //custom event, it will me, it will be listened to at ExtendingEventEmitter.js
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
