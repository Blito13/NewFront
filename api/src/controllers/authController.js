require('dotenv').config();
const { types } = require('pg');
const {Playerxs} = require ('../db');
const {Roles} = require ('../db');
const bcrypt = require ('bcrypt');
const jwt =  require ("jsonwebtoken");
const players = require('../mock/playeres');
const {SECRET ,ROL1 , ROL2 ,ROL3} = process.env;
const roles = ["admin" , "user" , "local"];
const encryptPassword = async(password) => {
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password ,salt);
}
const comparePassword =  async(password ,recievedPassword) =>{
    return await bcrypt.compare(password , recievedPassword);
}

const createRoll = async  () =>{
const count =  await Roles.count();
if (count > 0 ) return;
roles.map(e => {Roles.create({name : e})})
}
const signUp = async (req , res) =>{
  const {  userName , passWord  , roles , email} = req.body;
   //validaciones en ./ss
   createRoll();
   const playerCreated = await Playerxs.create({                
     userName,
     passWord : await encryptPassword(passWord),
     email
     
    }); 
    
   if(roles){

       const typesDb = await Roles.findAll({where: {name: roles}}) ;
   
        playerCreated.addRoles(typesDb);
   }else{
        const typesDb = await Roles.findAll({where: {name: 'user'}})
        playerCreated.addRoles(typesDb);
   }    

      const token = await  jwt.sign({id:playerCreated.id} , SECRET ,{
            expiresIn : 86400 //24hs
        } )
        res.status(200).json({token});
        //jsonwebtoken
}


const signIn = async (req , res) => {
    const {email , password} = req.body;
    console.log(email , password);
    const match =  await Playerxs.findOne({ where: { email : email }});
    if(!match) return res.status(400).json({message : "user not found"});
    const resc =  await comparePassword( password , match.passWord);
    if(!resc) return res.status(401).json({token:null , message :"invalid password"});
    const token =  jwt.sign({id:match.id} , SECRET , {expiresIn: 86400})

    res.send({token})

}
module.exports = {
    signUp,
    signIn,
}