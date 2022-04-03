const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
    },
    totalSold: {
      type: Number,
      default: 0,
    },
    orders: [{ type: mongoose.Types.ObjectId, ref: 'Order' }],
  },
  { timestamp: true }
);
module.exports = mongoose.model('Product', productSchema);
