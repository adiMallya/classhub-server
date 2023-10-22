const fs = require('fs');
const mongoose = require('mongoose');
const connectDb = require('./config/db');

const Class = require('./models/Class');
const Teacher = require('./models/Teacher');
const Student = require('./models/Student');

//Connect to DB
connectDb();

//Read data from files
const classesData = JSON.parse(fs.readFileSync('./_data/classes.json', 'utf-8'));
const teachersData = JSON.parse(fs.readFileSync('./_data/teachers.json', 'utf-8'));
const studentsData = JSON.parse(fs.readFileSync('./_data/students.json', 'utf-8'));


//Import data
const importData = async () => {
  try {
    await Class.create(classesData);
    await Teacher.create(teachersData);
    await Student.create(studentsData);

    console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect()
  }
}
//Delete data
const deleteData = async () => {
  try {
    await Class.deleteMany();
    await Teacher.deleteMany();
    await Student.deleteMany();

    console.log("Data destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect()
  }
}

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}