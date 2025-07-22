const express = require('express')
const addProductRouter = express.Router()

const {addProductData}= require('../../controllers/Seller/addproductcontroller')

addProductRouter.post("/addproductdata",addProductData)

module.exports = addProductRouter;