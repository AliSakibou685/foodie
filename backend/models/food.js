const mongoose = require('mongoose');

// models/food.js

const foodSchema = new mongoose.Schema({
    // other properties
  
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  }, {
    timestamps: true
  });