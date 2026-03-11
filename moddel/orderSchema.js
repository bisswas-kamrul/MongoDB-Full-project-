const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "Pending" // Pending, Shipped, Delivered
  },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);