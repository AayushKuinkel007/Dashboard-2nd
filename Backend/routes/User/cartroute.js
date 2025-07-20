const express = require('express')
const cartRouter = express.Router()

const {sendCartData} = require('../../controllers/User/cartcontroller')

cartRouter.post("/sendcartdata",sendCartData)

module.exports = cartRouter;