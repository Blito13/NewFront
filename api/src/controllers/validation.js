require('dotenv').config();
const jwt =  require ("jsonwebtoken");
const {SECRET} = process.env;
const {Playerxs} = require ('../db');
const {PlayerxsRoles} =  require('../db');
const {Roles} =  require('../db');
const validation =  async (req , res , next) =>{
    const token =  req.headers["x-access-token"];
    /* console.log(token); */
    if(!token) return res.status(400).json({message :"no token provided"});
    const decoded = jwt.verify(token , SECRET );
    req.userId = decoded.id;
    const usr =  await Playerxs.findByPk(decoded.id);
    
    if(!usr) return res.status(404).json({message : "ni ha visto"})
    next()
}
const isModerator = async (req , res , next) =>{
   const id = req.userId;
  
   const Uroles = await PlayerxsRoles.findAll({where : {PlayerxId:id }});
   const rol = await Roles.findAll({where :{ id :Uroles.map(e => e.RoleId)}});
   for(let i=0 ; i< rol.length ; i++){
       if (rol[i].name === "admin") {
        next();
           
       }
        return;
   }

  return res.status(403).json({message : "Unauthorized"});
}
module.exports= {
    validation,
    isModerator
}