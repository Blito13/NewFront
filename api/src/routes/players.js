const axios = require ('axios');
/* const {Recipe , Diet} = require ('../db'); */
const {getMoves , saveGame , payMatches}  = require('../controllers/javas.js');
/* const router = Router(); */
var express = require('express');
var router = express.Router();
router.get('/' , saveGame )
router.get('/players', getMoves)
router.get('/Payments' , payMatches )
module.exports = router;    