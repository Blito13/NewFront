const {Playerxs , Roles} = require ('../db');
const players = require('../mock/playeres');


const setUpPlayers = async (req , res) => {
/* const {id} =  req.params; */
/* const foundP =  await Playerxs.findByPk(id); */
const foundP = "hola ya te dejaron pasar"
return res.status(200).json({foundP})
}

module.exports = {
    setUpPlayers
}