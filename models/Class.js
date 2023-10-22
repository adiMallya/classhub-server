const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Class name is required"]
  },
  roomNum: {
    type: Number,
    required: [true, "Room number is required"]
  }
});

module.exports = mongoose.model('Class', ClassSchema); 