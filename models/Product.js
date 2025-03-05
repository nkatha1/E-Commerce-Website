const mongoose = require('mongoose');

// Schema for the Product model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

// Create a Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;