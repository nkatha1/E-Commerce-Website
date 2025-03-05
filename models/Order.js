const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    products: [
        {
            productId: String,
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: Number,
    paymentStatus: String,
    orderStatus: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;