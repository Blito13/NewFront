const axios = require ('axios');
const {getPlayersDb, postPlayer, setDemoPlayers,percentajeOfNumbers, percentajeOfPlayerGamble, searchWinners, setFinalNumber, editPlay, deletePlay  }  = require('../controllers/javas.js');
const {signUp ,signIn} = require ('../controllers/authController.js');
const {validation , isModerator} =  require ('../controllers/validation.js');
const {setUpPlayers} =  require ('../controllers/setUpPlayers.js');


var express = require('express');
var router = express.Router();
router.post('/create' , postPlayer);
router.put('/search/edit/:id', editPlay);
router.delete('/onDelete/:id',deletePlay);
router.get('/setPlayers', setDemoPlayers);
router.get('/setFinalNumber', setFinalNumber);
router.get('/average' , percentajeOfNumbers);
router.post('/expected' , percentajeOfPlayerGamble);
router.get('/finalResults' , searchWinners);
router.post('/login' , signIn);
router.get('/getplayers' ,getPlayersDb);
module.exports = router;