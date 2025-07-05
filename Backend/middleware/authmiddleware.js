const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

const jwtSecret = 'your_super_secret_key'

module.exports = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    // console.log("this is auth header",authHeader)

    if(authHeader && authHeader.startsWith('Bearer')){
        try{
            const token = authHeader.split(' ')[1]
            console.log("splitted token",token)
            const deCode = jwt.verify(token,jwtSecret)
            console.log(deCode)
            req.user = await User.findById(deCode.id).select('-password')
            next()        
        }
        catch(err){
            res.status(401).json({
                message:"not authorized token failed"
            })
        }
    }
    else{
        res.status(401).json({
            message:"not authorized token failed"
        })        
    }
}
