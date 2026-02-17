const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CetagoryList",
    required: true
  },

  description: {
    type: String
  },

  status: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

module.exports = mongoose.model("SubCategory", subCategorySchema);
