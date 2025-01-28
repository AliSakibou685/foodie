const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/foods');

// All paths start with '/api/foods'

// POST /api/posts
router.post('/', foodsCtrl.create);
// GET /api/posts
router.get('/', foodsCtrl.index);
//Delete /api/foods/:foodId
router.delete('/:foodId', foodsCtrl.delete);

module.exports = router;