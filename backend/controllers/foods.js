const Food = require('../models/food');


module.exports = {
    create,
    index,
    getOne,
    delete: deleteFood
    
};

// GET /api/foods (INDEX action)
async function index(req, res) {
    const foods = await Food.find({}).populate('category');
    res.json(foods);
}

//POST /api/foods (CREATE action)
async function create(req, res) {
    try {
      req.body.user = req.user._id;
      req.body.expires += 'T00:00';
      const food = await Food.create(req.body);
      res.json(food);
    } catch (err) {
      console.log(err)
      res.status(400).json({ message: 'Create Food Failed' });
    }
  }


// DELETE /api/foods/:foodId (DELETE action)
async function deleteFood(req, res) {
  try {
    const food = await Food.findByIdAndDelete(req.params.foodId);
    res.json({ message: 'Food deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Delete Food Failed' });
  }
}

async function getOne(req, res) {
  try {
    const food = await Food.findById(req.params.foodId);
    res.json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'No Food Found' });
  }
}


