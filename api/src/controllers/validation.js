require('dotenv').config();
const jwt =  require ("jsonwebtoken");
const {SECRET} = process.env;
const {Playerxs} = require ('../db');
const validation =  async (req , res , next) =>{
    const token =  req.headers["x-access-token"];
    console.log(token);
    if(token) return res.status(400).json({message :"no token provided"});
    const decoded = jwt.verify(token , SECRET );
    console.log(decoded)
    /* const find =  Playerxs */
    next()
}
module.exports= {
    validation
}