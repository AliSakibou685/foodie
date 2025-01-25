const mongoose = require('mongoose');

// models/category.js
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
  });
