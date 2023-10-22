const express = require('express');
const { getStudents, getStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/student.controller');

const router = express.Router();

// @desc : Get all students
// @route : GET /api/v1/students
// @access : Public
router.get('/', async (req, res, next) => {
  try {
    const students = await getStudents();

    res.status(200).json({
      success: true,
      data: students
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Create a Student
// @route : POST /api/v1/students
// @access : Public
router.post('/', async (req, res, next) => {
  try {
    const student = await createStudent(req.body);

    res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Get student detail
// @route : GET /api/v1/students/:id
// @access : Public
router.get('/:id', async (req, res, next) => {
  try {
    const student = await getStudent(req.params.id);

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Edit student detail
// @route : POST /api/v1/students/:id
// @access : Public
router.post('/:id', async (req, res, next) => {
  try {
    const student = await updateStudent(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Remove a student
// @route : DEL /api/v1/students/:id
// @access : Public
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteStudent(req.params.id);

    res.status(204).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;