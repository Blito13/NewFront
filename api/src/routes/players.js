const axios = require ('axios');
const {getMoves , payMatches ,getPlayersDb }  = require('../controllers/javas.js');
const {signUp ,signIn} = require ('../controllers/authController.js');
const {validation , isModerator} =  require ('../controllers/validation.js');
const {setUpPlayers} =  require ('../controllers/setUpPlayers.js');


var express = require('express');
var router = express.Router();
router.post('/create' , signUp );
router.get('/players', getPlayersDb);
router.post('/config' , [validation , isModerator ] ,setUpPlayers)
router.post('/login' , signIn);
router.get('/Payments' , payMatches );
router.get('/prueva' , getMoves);
module.exports = router;    