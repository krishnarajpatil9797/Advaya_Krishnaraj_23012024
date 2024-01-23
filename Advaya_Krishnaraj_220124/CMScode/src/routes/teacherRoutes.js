// routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route to assign a teacher to a course
router.post('/assignToCourse', (req, res) => {
  const { teacher_id, course_id } = req.body;
  // Assuming the teacher_id and course_id are sent in the request body for assignment
  // You can change this based on your API design
  const teacher = { teacher_id }; // create a teacher object with the provided teacher_id
  const course = { course_id }; // create a course object with the provided course_id
  teacherController.assignToCourse(teacher, course);
  res.send('Teacher assigned to the course successfully.');
});

// Route to unassign a teacher from a course
router.delete('/unassignFromCourse', (req, res) => {
  const { teacher_id, course_id } = req.body;
  // Assuming the teacher_id and course_id are sent in the request body for unassignment
  // You can change this based on your API design
  const teacher = { teacher_id }; // create a teacher object with the provided teacher_id
  const course = { course_id }; // create a course object with the provided course_id
  teacherController.unassignFromCourse(teacher, course);
  res.send('Teacher unassigned from the course successfully.');
});

// Route to display courses taught by a teacher
router.get('/coursesTaught/:teacher_id', (req, res) => {
  const { teacher_id } = req.params;
  // Assuming the teacher_id is sent as a route parameter
  // You can change this based on your API design
  const teacher = { teacher_id }; // create a teacher object with the provided teacher_id
  teacherController.displayCoursesTaught(teacher);
  res.send('Courses taught by the teacher displayed successfully.');
});

// Other teacher routes
// ...

module.exports = router;
