const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
subProducts: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductList"
  }
],
  images: [
    {
      type: String, // image URLs
    }
  ],
  stock: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  attributes: {
    color: [String],   // array of colors like ["Red", "Blue"]
    size: [String],    // array of sizes like ["S", "M", "L", "XL"]
    ram: [String],     // array of RAM options like ["4GB", "8GB", "16GB"]
  },
}, { timestamps: true });

module.exports = mongoose.model("SubProduct", subProductSchema);
