const router = require('express').Router();
const { createOrder, getAllOrder } = require('../controller/order');

const { requireSignin, checkAdminRoute } = require('../middleware/auth');
router.post('/createOrder', requireSignin, checkAdminRoute, createOrder);
router.get('/', getAllOrder);
module.exports = router;
