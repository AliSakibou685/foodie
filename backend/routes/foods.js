const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/foods');

// All paths start with '/api/foods'

//POST /api/foods
router.post('/', foodsCtrl.create);
//GET /api/foods
router.get('/', foodsCtrl.index);
//DELETE /api/foods/:foodId
router.delete('/:foodId', foodsCtrl.delete);
//GET /api/foods/:foodId
router.get('/:foodId', foodsCtrl.getOne);

module.exports = router;