const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  subject: {
    type: String,
    enum: ["Mathematics", "Physics", "Chemistry", "Biology", "History/Civics", "Geography", "Computer Science", "English", "Hindi", "French", "Physical Development"],
    required: [true, "Subject is required"]
  },
  classes: {
    type: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Class',
      }],
    validate: [arrayLimit, '{PATH} requires at least one class assigned.']
  }
});

function arrayLimit(val) {
  return val.length > 0;
}

module.exports = mongoose.model('Teacher', TeacherSchema); 