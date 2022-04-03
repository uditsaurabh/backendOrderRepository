const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    status: {
      type: String,
      enum: ['in progress', 'cancelled', 'completed'],
      default: 'user',
    },
    products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
  },
  { timestamp: true }
);
module.exports = mongoose.model('Order', orderSchema);
