const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of Birth required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male"
  },
  attendance: {
    type: Number,
    max: [100, "Attendance cannot be greater than 100"],
    min: [0, "Attendance cannot be less than 0"],
    default: 100
  },
  marks: {
    type: Number,
    max: [100, "Marks cannot be greater than 100"],
    min: [0, "Marks cannot be less than 0"],
    default: 0
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: [true, "Student must be assigned to a class"]
  }
});

module.exports = mongoose.model('Student', StudentSchema); 