const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cetagorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  description: {
    type: String
  },

  subcategorilist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory"
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("CetagoryList", cetagorySchema);
