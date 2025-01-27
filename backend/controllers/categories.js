const Category = require('../models/category');


module.exports = {
    create,
    index
};

// GET /api/categories (INDEX action)
async function index(req, res) {
    const categories = await Category.find({})
    res.json(categories);
}

//POST /api/foods (CREATE action)
async function create(req, res) {
    try {
      req.body.user = req.user._id;
      const category = await Category.create(req.body);
      res.json(category);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'Create Category Failed' });
    }
  }
