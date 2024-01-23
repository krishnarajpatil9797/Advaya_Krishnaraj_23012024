// controllers/studentController.js
const Student = require('../models/Student');
const db = require('../db');

class StudentController {
  // Method to enroll in a course
  static enrollInCourse(student, course) {
    // Validate if the student exists
    const findStudentSql = 'SELECT * FROM students WHERE student_id = ?';
    const findStudentValues = [student.student_id];

    db.query(findStudentSql, findStudentValues, (err, results) => {
      if (err) {
        console.error(`Error finding student: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Student ${student.student_name} does not exist.`);
      } else {
        student.enrollInCourse(course);
      }
    });
  }

  // Method to withdraw from a course
  static withdrawFromCourse(student, course) {
    // Validate if the student exists
    const findStudentSql = 'SELECT * FROM students WHERE student_id = ?';
    const findStudentValues = [student.student_id];

    db.query(findStudentSql, findStudentValues, (err, results) => {
      if (err) {
        console.error(`Error finding student: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Student ${student.student_name} does not exist.`);
      } else {
        student.withdrawFromCourse(course);
      }
    });
  }

  // Method to display the list of enrolled courses
  static displayEnrolledCourses(student) {
    // Validate if the student exists
    const findStudentSql = 'SELECT * FROM students WHERE student_id = ?';
    const findStudentValues = [student.student_id];

    db.query(findStudentSql, findStudentValues, (err, results) => {
      if (err) {
        console.error(`Error finding student: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Student ${student.student_name} does not exist.`);
      } else {
        student.displayEnrolledCourses();
      }
    });
  }

  // Other student-related methods
  // ...
}

module.exports = StudentController;
