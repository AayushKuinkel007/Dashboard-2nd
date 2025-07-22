const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img:{
    type:String,
    required:false
  },
  productname: {
    type: String,
    required: true,
  },
  productdescription: {
    type: String,
    required: false,
  },
  productavailability:{
    type: Boolean,
    required: false
  },
  productprice: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Add Product", productSchema);
