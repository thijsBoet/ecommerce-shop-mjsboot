const express = require('express');
const multer = require('multer');
const { validationResult } = require('express-validator');

const productsRepo = require('../../repositories/products');
const productsNewTemplate = require('../../views/admin/products/new');
const { requireTitle, requirePrice } = require('./validators');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/products', (req, res) => {
    res.send('Products')
});

router.get('/admin/products/new', (req, res) => {
    res.send(productsNewTemplate({}));
});

router.post(
	'/admin/products/new',
	[requireTitle, requirePrice],
	upload.single('image'),
	(req, res) => {
		errors = validationResult(req);

        req.file;

		res.send('submitted');
	}
);

module.exports = router