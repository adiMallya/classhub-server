const ErrorResponse = require('../utils/errorResponse');
const Class = require('../models/Class');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

exports.getClasses = async () => {
  try {
    const classes = await Class.find();
    return classes;
  } catch (error) {
    throw error;
  }
}

exports.getClassMembers = async (classId, memberType) => {
  try{
    if(memberType === 'students'){
      return await Student.find({ class: classId });
    }else if(memberType === 'teachers'){
      return await Teacher.find({ classes: classId });
    }else{
      throw new ErrorResponse(`Query parameter 'type' must be either 'students' or 'teachers'`, 400);
    }
  }catch(error){
    throw error;
  }
}