const express = require('express')
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

//Post '/api/categories'
router.post('/', categoriesCtrl.create);


router.get('/', categoriesCtrl.index);

module.exports = router;