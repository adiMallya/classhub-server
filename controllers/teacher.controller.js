const ErrorResponse = require('../utils/errorResponse');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');

exports.getTeachers = async () => {
  try {
    const teachers = await Teacher.find().populate('classes', 'name');
    return teachers;
  } catch (error) {
    throw error;
  }
}

exports.getTeacher = async (teacherId) => {
  try {
    const teacher = await Teacher.findById(teacherId).populate('classes', 'name');

    if (!teacher) {
      throw new ErrorResponse(`Teacher with ID: ${teacherId} not found`, 404);
    }

    return teacher;
  } catch (error) {
    throw error;
  }
}

exports.createTeacher = async (teacherDetail) => {
  try {
    const teacher = await Teacher.create({ ...teacherDetail });

    return teacher.populate('classes', 'name');
  }catch(error){
   throw error;   
  }
}

exports.updateTeacher = async (teacherId, fieldsToUpdate) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(teacherId, fieldsToUpdate, {
    new: true,
    runValidators: true
    }).populate('classes', 'name');

    if(!teacher){
      throw new ErrorResponse(`Teacher with ID: ${teacherId} not found`, 404);
    }

    return teacher;
  } catch (error) {
    throw error;
  }
}

exports.deleteTeacher = async (teacherId) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(teacherId);

    if(!teacher){
      throw new ErrorResponse(`Teacher with ID: ${teacherId} not found`, 404);
    }
  } catch (error) {
    throw error;
  }
}