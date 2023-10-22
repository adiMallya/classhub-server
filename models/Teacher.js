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
  classes: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Class',
    required: [true, "Teacher must be assigned to a class"]
  }]
});

module.exports = mongoose.model('Teacher', TeacherSchema); 