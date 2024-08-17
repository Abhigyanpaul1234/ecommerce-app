const express = require('express');
const { getProducts, createProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);


module.exports = router;