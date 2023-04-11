const mongoose = require("mongoose");

const product = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    default: "electronics",
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  rating: {
    count: {
      type: String,
      required: true,
      default: 0,
    },
    rate: {
      type: String,
      required: true,
      default: 0,
    },
  },
});

const Product = mongoose.model("product", product);

module.exports = Product;
