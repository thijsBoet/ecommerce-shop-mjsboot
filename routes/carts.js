const express = require('express');

const router = express.Router();

router.post('/cart/products', (req, res) => {
	console.log(req.body.productId);
    res.send('Product added to cart');
});

router.get('/cart', (req, res) => { 
    res.send('Cart');
});

router.post('/cart/products/delete', (req, res) => {
    res.send('Products');
});

module.exports = router;