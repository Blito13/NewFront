const axios = require ('axios');
const {getMoves , payMatches ,getPlayersDb, postPlayers, setDemoPlayers, getMatches, betPercentaje ,percentajeOfNumbers }  = require('../controllers/javas.js');
const {signUp ,signIn} = require ('../controllers/authController.js');
const {validation , isModerator} =  require ('../controllers/validation.js');
const {setUpPlayers} =  require ('../controllers/setUpPlayers.js');


var express = require('express');
var router = express.Router();
router.post('/create' , postPlayers);
router.get('/setPlayers', setDemoPlayers);
router.get('/convida' , percentajeOfNumbers);
/* router.post('/config' , [validation , isModerator ] ,setUpPlayers); */
router.get('/percent' ,  betPercentaje);
router.post('/login' , signIn);
router.get('/payments' , payMatches );
router.get('/prueva' , getMoves);
router.get('/matches' , getMatches);
router.get('/getPlayers' ,getPlayersDb);
module.exports = router;    