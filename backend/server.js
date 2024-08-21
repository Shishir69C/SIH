// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/farmersMarket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schema and Model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
});

const Product = mongoose.model('Product', productSchema);

// Routes

// POST route to add a product
app.post('/products', (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  newProduct.save((err, product) => {
    if (err) return res.status(500).send({ success: false, message: 'Failed to add product' });
    res.status(201).send({ success: true, product });
  });
});

// GET route to fetch products
app.get('/products', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({ success: false, message: 'Failed to fetch products' });
    res.status(200).send(products);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://10.0.2.2:${port}`);
});

  
  
  