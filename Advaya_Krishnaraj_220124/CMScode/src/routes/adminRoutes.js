// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to add a new course
router.post('/courses/add', (req, res) => {
  const { course_id, course_name, max_students } = req.body;
  adminController.addCourse(course_id, course_name, max_students);
  res.send('Course added successfully.');
});

// Route to remove a course
router.delete('/courses/remove', (req, res) => {
  const { course_id } = req.body;
  // Assuming the course_id is sent in the request body for removal
  // You can change this based on your API design
  const course = { course_id }; // create a course object with the provided course_id
  adminController.removeCourse(course);
  res.send('Course removed successfully.');
});

// Route to add a new teacher
router.post('/teachers/add', (req, res) => {
  const { teacher_id, teacher_name } = req.body;
  adminController.addTeacher(teacher_id, teacher_name);
  res.send('Teacher added successfully.');
});

// Route to remove a teacher
router.delete('/teachers/remove', (req, res) => {
  const { teacher_id } = req.body;
  // Assuming the teacher_id is sent in the request body for removal
  // You can change this based on your API design
  const teacher = { teacher_id }; // create a teacher object with the provided teacher_id
  adminController.removeTeacher(teacher);
  res.send('Teacher removed successfully.');
});

// Route to add a new student
router.post('/students/add', (req, res) => {
  const { student_id, student_name } = req.body;
  adminController.addStudent(student_id, student_name);
  res.send('Student added successfully.');
});

// Route to remove a student
router.delete('/students/remove', (req, res) => {
  const { student_id } = req.body;
  // Assuming the student_id is sent in the request body for removal
  // You can change this based on your API design
  const student = { student_id }; // create a student object with the provided student_id
  adminController.removeStudent(student);
  res.send('Student removed successfully.');
});

// Other admin routes
// ...

module.exports = router;
