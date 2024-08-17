const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



module.exports = { getProducts ,createProduct };
