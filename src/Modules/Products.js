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
  description:{
    type:String,
    require:true,
    default:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula sapien odio, id blandit mi consequat id. Integer vitae commodo magna. Suspendisse cursus dolor ut felis eleifend commodo. Sed dapibus vestibulum odio, a bibendum nulla dignissim a. Ut interdum ipsum vel tellus feugiat, vel efficitur quam vehicula. Proin tristique libero id nisi viverra, eget fringilla metus congue. Maecenas a massa sit amet magna tempus convallis eget vel risus. Sed semper odio eu nulla tempus, at convallis elit commodo. Aenean sagittis enim in nisl convallis bibendum.'
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
