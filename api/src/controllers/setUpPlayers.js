const {Playerxs , Roles} = require ('../db');
const players = require('../mock/playeres');


const setUpPlayers = async (req , res) => {
const foundP = "hola ya te dejaron pasar"
return res.status(200).json({foundP})
}

module.exports = {
    setUpPlayers
}