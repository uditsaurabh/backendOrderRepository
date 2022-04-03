const Product = require('../models/product');

exports.createProduct = async (req, res, next) => {
  try {
    const { productName } = req.body;
    const product = new Product({
      productName,
    });
    const savedProduct = await product.save();
    return res.status(200).send(savedProduct);
  } catch (ex) {
    return res.status(400).send(ex.message);
  }
};
