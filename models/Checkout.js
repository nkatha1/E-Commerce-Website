const mongoose = require('mongoose');

// Schema for the Checkout model
const checkoutSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // Example status
  createdAt: { type: Date, default: Date.now }
});

// Create a Checkout model
const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;