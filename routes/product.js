const router = require('express').Router();
const { createProduct } = require('../controller/product');

const { requireSignin, checkAdminRoute } = require('../middleware/auth');
router.post('/createProduct', requireSignin, checkAdminRoute, createProduct);

module.exports = router;
