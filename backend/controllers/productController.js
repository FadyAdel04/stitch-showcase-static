const { getProducts } = require('../models/productModel');

async function fetchProducts(req, res) {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

module.exports = { fetchProducts }; 