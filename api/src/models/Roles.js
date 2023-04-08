const {DataTypes , STRING, Sequelize} = require('sequelize');





module.exports = (Sequelize) =>{
    Sequelize.define('Roles' , {
        id:{
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey :true
        },
        name:{
            type : DataTypes.STRING,
            
        }
    });
}
