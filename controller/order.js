const Order = require('../models/order');
const Product = require('../models/product');
exports.createOrder = async (req, res, next) => {
  try {
    const { name, productName, status } = req.body;
    let order = new Order({ name, status });
    let product = await Product.findOne({ productName });
    if (product) {
      product.totalSold = product.totalSold + 1;
      order.products.push(product._id);
      product.orders.push(order._id);
      order = await order.save();
      product = await product.save();
      return res.status(200).send(order);
    } else {
      return res.status(401).json('no such product found');
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
};
exports.getAllOrder = async (req, res) => {
  try {
    let orders = await Order.find({}).populate('products');
    res.send(orders);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
