const express = require('express');
const productsRepo = require('../../repositories/products');
const ProductsNewTemplate = require('../../views/admin/products/new');



const router = express.Router();

router.get('/admin/products', (req, res) => {
    res.send('Products')
});

router.get('/admin/products/new', (req, res) => {
    res.send(ProductsNewTemplate({}));
});

module.exports = router