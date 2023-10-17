const axios = require ('axios');
const {getPlayersDb, postPlayers, setDemoPlayers,percentajeOfNumbers, percentajeOfPlayerGamble, searchWinners }  = require('../controllers/javas.js');
const {signUp ,signIn} = require ('../controllers/authController.js');
const {validation , isModerator} =  require ('../controllers/validation.js');
const {setUpPlayers} =  require ('../controllers/setUpPlayers.js');


var express = require('express');
var router = express.Router();
router.post('/create' , postPlayers);
router.get('/setPlayers', setDemoPlayers);
router.get('/average' , percentajeOfNumbers);
router.post('/expected' , percentajeOfPlayerGamble);
router.post('/finalResults' , searchWinners);
router.post('/login' , signIn);
router.get('/getPlayers' ,getPlayersDb);
module.exports = router;    