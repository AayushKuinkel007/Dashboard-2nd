const Cart = require("../../models/User/cartmodel");

exports.sendCartData = async (req, res) => {
  try {
    const {
      img,
      productname,
      productdescription,
      productavailability,
      productprice,
    } = req.body;

    const cartProduct = await Cart.create({
      img,
      productname,
      productdescription,
      productavailability,
      productprice,
    });

    console.log("poroduct added successfully",cartProduct)
  } catch (err) {
    console.log("error", err);
  }
};
