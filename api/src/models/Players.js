const { DataTypes, STRING } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Playerxs', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey :true
    },
     apuesta: {
      type :DataTypes.INTEGER,
    },
  
    moneda: {
      type: DataTypes.STRING,
    },

    image : {
      type:DataTypes.STRING,
      allowNull : true
    },
    image : {
      type:DataTypes.STRING,
      allowNull : true
    },
    numeros : {
      type:DataTypes.STRING, //para agregarlos como arrays usar terminacion JSON
      allowNull : true
    },
    createdINBd: {                  
      type: DataTypes.BOOLEAN,  
      allowNull: false,  
      defaultValue: true
    }

    
  }, {timestamps:false});

};