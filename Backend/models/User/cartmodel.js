const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  img: "",
  productname: {
    type: String,
    required: true,
  },
  productdescription: {
    type: String,
    required: true,
  },
  productprice: {
    type: String,
    required: true,
  },
});
