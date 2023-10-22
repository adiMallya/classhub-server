const ErrorResponse = require('../utils/errorResponse');
const Student = require('../models/Student');
const Class = require('../models/Class');

exports.getStudents = async () => {
  try {
    const students = await Student.find().populate('class', 'name');
    return students;
  } catch (error) {
    throw error;
  }
}

exports.getStudent = async (studentId) => {
  try {
    const student = await Student.findById(studentId).populate('class', 'name');

    if (!student) {
      throw new ErrorResponse(`Student with ID: ${studentId} not found`, 404);
    }

    return student;
  } catch (error) {
    throw error;
  }
}

exports.createStudent = async (studentDetail) => {
  try {
    const student = await Student.create({ ...studentDetail });

    return student.populate('class', 'name');
  }catch(error){
   throw error;   
  }
}

exports.updateStudent = async (studentId, fieldsToUpdate) => {
  try {
    const student = await Student.findByIdAndUpdate(studentId, fieldsToUpdate, {
    new: true,
    runValidators: true
    }).populate('class', 'name');

    if(!student){
      throw new ErrorResponse(`Student with ID: ${studentId} not found`, 404);
    }

    return student;
  } catch (error) {
    throw error;
  }
}

exports.deleteStudent = async (studentId) => {
  try {
    const student = await Student.findByIdAndDelete(studentId);

    if(!student){
      throw new ErrorResponse(`Student with ID: ${studentId} not found`, 404);
    }
  } catch (error) {
    throw error;
  }
}