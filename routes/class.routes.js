const express = require('express');
const { getClasses, getClassMembers } = require('../controllers/class.controller');

const router = express.Router();

// @desc : Get all classes
// @route : GET /api/v1/class
// @access : Public
router.get('/', async (req, res, next) => {
  try {
    const classes = await getClasses();

    res.status(200).json({
      success: true,
      data: classes
    });
  }catch(error){
    next(error);
  }
});

// @desc : Get students/teachers of a class
// @route : GET /api/v1/class/:classId/members?type=
// @access : Public
router.get('/:classId/members', async (req, res, next) => {
  try {
    const { type } = req.query;
    const classMembers = await getClassMembers(req.params.classId, type);

    res.status(200).json({
      success: true,
      data: classMembers
    });
  }catch(error){
    next(error);
  }
});

module.exports = router;