const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmailPost = new Schema({
  Firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, // er ortho hosse email faka raka jabe na ||ফর্ম না পূরণ করলে ঢুকতে দিবো না
    unique: true, // er ortho hosse email duplicate kora jabe na||একই NID kinba email দিয়ে ২টা passport othoba send হবে না
    lowercase: true, // যে value আসবে, MongoDB save করার আগে সব অক্ষর ছোট হাতের (lowercase) করে ফেলবে
    trim: true, // string-এর শুরু ও শেষের ফাঁকা space কেটে ফেলবে
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  expireotp: {
    type: Date,
  },
  verification: {
  type: Boolean,
  default: false
},
  
});
module.exports = mongoose.model("List", EmailPost);
