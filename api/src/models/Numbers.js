const {DataTypes , STRING, Sequelize} = require('sequelize');





module.exports = (Sequelize) =>{
    Sequelize.define('Numbers' , {
        decenaDeMil:{
            type : DataTypes.STRING,
        },
        unidadDeMil:{
            type : DataTypes.STRING,
            
        },
        centena:{
            type : DataTypes.STRING,
            
        },
        decena:{
            type : DataTypes.STRING,
            
        },
        unidad:{
            type : DataTypes.STRING,
            
        },

    });
}