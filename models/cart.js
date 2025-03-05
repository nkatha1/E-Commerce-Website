const mongoose = require('mongoose');

// Schema for the Cart model
const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // Each user can have their cart
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

// Create a Cart model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;