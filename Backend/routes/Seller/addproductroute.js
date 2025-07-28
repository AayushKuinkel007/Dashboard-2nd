const express = require('express')
const addProductRouter = express.Router()

const {addProductData, getproductsData}= require('../../controllers/Seller/addproductcontroller')

addProductRouter.post("/addproductdata",addProductData)

addProductRouter.get("/getproductdata",getproductsData)

module.exports = addProductRouter;