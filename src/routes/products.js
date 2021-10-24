// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
let productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

module.exports= router;