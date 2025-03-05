require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Use express.json() to parse incoming JSON requests
app.use(express.json());

// MongoDB Product Model (Mongoose Schema)
const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB using URI from environment variables
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Test Route - GET to check if server is working
app.get('/test', (req, res) => {
  res.json({ message: 'MongoDB is connected and the server is running!' });
});

// POST Route - Add a new product to MongoDB
app.post('/add-product', async (req, res) => {
  const { name, price } = req.body;

  try {
    // Create a new product
    const newProduct = new Product({ name, price });
    
    // Save the product to the database
    await newProduct.save();

    // Return a success message with the product data
    res.status(201).json({
      message: 'Product added successfully',
      product: newProduct
    });
  } catch (err) {
    // Return an error message if something goes wrong
    res.status(500).json({
      message: 'Error adding product',
      error: err.message
    });
  }
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});