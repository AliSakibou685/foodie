
const food = require('../models/food');
const Food = require('../models/food');

const express = require('express');
const router = express.Router();

module.exports = {
    create,
    index,
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
      const food = await Food.create(req.body);
      res.json(food);
    } catch (err) {
      res.status(400).json({ message: 'Create Food Failed' });
    }
  }

// DELETE /api/foods/:foodId (DELETE action)
async function deleteFood(req, res) {
  try {
    const project = await Food.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.json({ message: 'Food deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Delete Project Failed' });
  }
}
