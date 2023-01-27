const axios = require ('axios');
/* const {Recipe , Diet} = require ('../db'); */
const {getPlayers}  = require('../controllers/javas.js');
/* const router = Router(); */
var express = require('express');
var router = express.Router();
router.get('/players', getPlayers)


module.exports = router;    