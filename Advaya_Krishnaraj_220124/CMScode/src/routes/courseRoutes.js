// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to add a student to a course
router.post('/enroll', (req, res) => {
  const { course_id, student_id } = req.body;
  // Assuming the course_id and student_id are sent in the request body for enrollment
  // You can change this based on your API design
  const course = { course_id }; // create a course object with the provided course_id
  const student = { student_id }; // create a student object with the provided student_id
  courseController.addStudentToCourse(course, student);
  res.send('Student enrolled in the course successfully.');
});

router.get('/courses', (req, res) => {
  console.log('Received GET request for courses');
  courseController.getAllCourses(req, res);
});


// Route to remove a student from a course
router.delete('/withdraw', (req, res) => {
  const { course_id, student_id } = req.body;
  // Assuming the course_id and student_id are sent in the request body for withdrawal
  // You can change this based on your API design
  const course = { course_id }; // create a course object with the provided course_id
  const student = { student_id }; // create a student object with the provided student_id
  courseController.removeStudentFromCourse(course, student);
  res.send('Student withdrawn from the course successfully.');
});

// Route to display enrolled students in a course
router.get('/enrolledStudents/:course_id', (req, res) => {
  const { course_id } = req.params;
  // Assuming the course_id is sent as a route parameter
  // You can change this based on your API design
  const course = { course_id }; // create a course object with the provided course_id
  courseController.displayEnrolledStudents(course);
  res.send('Enrolled students displayed successfully.');
});

// Other course routes
// ...

module.exports = router;
