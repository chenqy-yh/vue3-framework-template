class OrderManager { 
    orders = [];
    constructor() {}
    addOrder(order) {
        this.orders.push(order);
    }
}

class Order { 
    orderId;
    customerName;
    totalPrice;
    constructor(orderId, customerName, totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }
}

class Consumer { 
    constructor() { }
    createOrder() { 
        const order = new Order(1, 'John Doe', 100);
        return order;
    }
}

const orderManager = new OrderManager();
const consumer = new Consumer();
orderManager.addOrder(consumer.createOrder());