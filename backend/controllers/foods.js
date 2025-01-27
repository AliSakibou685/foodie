const Food = require('../models/food');

module.exports = {
    create,
    index
};

// GET /api/foods (INDEX action)
async function index(req, res) {
    const foods = await Food.find({}).populate('foods');
    res.json(foods);
}

//POST /api/foods (CREATE action)
async function create(req, res) {
    try {
      req.body.user = req.user._id;
      const food = await Food.create(req.body);
      res.json(food);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'Create Food Failed' });
    }
  }

