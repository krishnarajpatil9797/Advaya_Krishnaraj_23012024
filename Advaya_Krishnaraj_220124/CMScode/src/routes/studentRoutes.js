// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to enroll in a course
router.post('/enroll', (req, res) => {
  const { student_id, course_id } = req.body;
  // Assuming the student_id and course_id are sent in the request body for enrollment
  // You can change this based on your API design
  const student = { student_id }; // create a student object with the provided student_id
  const course = { course_id }; // create a course object with the provided course_id
  studentController.enrollInCourse(student, course);
  res.send('Enrolled in the course successfully.');
});

// Route to withdraw from a course
router.delete('/withdraw', (req, res) => {
  const { student_id, course_id } = req.body;
  // Assuming the student_id and course_id are sent in the request body for withdrawal
  // You can change this based on your API design
  const student = { student_id }; // create a student object with the provided student_id
  const course = { course_id }; // create a course object with the provided course_id
  studentController.withdrawFromCourse(student, course);
  res.send('Withdrawn from the course successfully.');
});

// Route to display enrolled courses
router.get('/enrolledCourses/:student_id', (req, res) => {
  const { student_id } = req.params;
  // Assuming the student_id is sent as a route parameter
  // You can change this based on your API design
  const student = { student_id }; // create a student object with the provided student_id
  studentController.displayEnrolledCourses(student);
  res.send('Enrolled courses displayed successfully.');
});

// Other student routes
// ...

module.exports = router;
