const mongoose = require('mongoose');

// models/food.js
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    expires: {
      type: Date,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Food', foodSchema)