const axios = require ('axios');
/* const {Recipe , Diet} = require ('../db'); */
const {getMoves , saveGame , payMatches ,getPlayersDb }  = require('../controllers/javas.js');
/* const router = Router(); */
var express = require('express');
var router = express.Router();
router.post('/create' , saveGame )
router.get('/players', getPlayersDb)
router.get('/Payments' , payMatches )
router.get('/prueva' , getMoves)
module.exports = router;    