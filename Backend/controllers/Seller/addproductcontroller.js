const Product = require("../../models/Seller/addproduct")

exports.addProductData = async(req,res)=>{
    try{
        const{
            img,
            productname,
            productdescription,
            productavailability,
            productprice,
        } = req.body 
        const addProduct = await Product.create({
            img,
            productname,
            productdescription,
            productavailability,
            productprice,           
        })
        console.log("product added",addProduct)
    }
    catch(err){
        console.log('error',err)
    }
}