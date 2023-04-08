const axios = require ('axios');
/* const {Recipe , Diet} = require ('../db'); */
const {getMoves , payMatches ,getPlayersDb }  = require('../controllers/javas.js');
const {signUp ,signIn} = require ('../controllers/authController.js');
const {validation} =  require ('../controllers/validation.js');
/* const router = Router(); */
var express = require('express');
var router = express.Router();
router.post('/create' , validation, signUp );
router.get('/players', getPlayersDb);
router.post('/login' , signIn)
router.get('/Payments' , payMatches );
router.get('/prueva' , getMoves);
module.exports = router;    