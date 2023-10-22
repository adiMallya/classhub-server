const express = require('express');
const { getTeachers, getTeacher, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacher.controller');

const router = express.Router();

// @desc : Get all teachers
// @route : GET /api/v1/teachers
// @access : Public
router.get('/', async (req, res, next) => {
  try {
    const teachers = await getTeachers();

    res.status(200).json({
      success: true,
      data: teachers
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Create a Teacher
// @route : POST /api/v1/teachers
// @access : Public
router.post('/', async (req, res, next) => {
  try {
    const teacher = await createTeacher(req.body);

    res.status(201).json({
      success: true,
      data: teacher
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Get a teacher detail
// @route : GET /api/v1/teachers/:id
// @access : Public
router.get('/:id', async (req, res, next) => {
  try {
    const teacher = await getTeacher(req.params.id);

    res.status(200).json({
      success: true,
      data: teacher
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Edit a teacher detail
// @route : POST /api/v1/teachers/:id
// @access : Public
router.post('/:id', async (req, res, next) => {
  try {
    const teacher = await updateTeacher(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: teacher
    });
  } catch (error) {
    next(error);
  }
});

// @desc : Remove a teacher
// @route : DEL /api/v1/teachers/:id
// @access : Public
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteTeacher(req.params.id);

    res.status(204).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;