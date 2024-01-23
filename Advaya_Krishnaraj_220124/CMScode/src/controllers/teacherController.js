// controllers/teacherController.js
const Teacher = require('../models/Teacher');
const db = require('../db');

class TeacherController {
  // Method to assign a teacher to a course
  static assignToCourse(teacher, course) {
    // Validate if the teacher exists
    const findTeacherSql = 'SELECT * FROM teachers WHERE teacher_id = ?';
    const findTeacherValues = [teacher.teacher_id];

    db.query(findTeacherSql, findTeacherValues, (err, results) => {
      if (err) {
        console.error(`Error finding teacher: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Teacher ${teacher.teacher_name} does not exist.`);
      } else {
        teacher.assignToCourse(course);
      }
    });
  }

  // Method to unassign a teacher from a course
  static unassignFromCourse(teacher, course) {
    // Validate if the teacher exists
    const findTeacherSql = 'SELECT * FROM teachers WHERE teacher_id = ?';
    const findTeacherValues = [teacher.teacher_id];

    db.query(findTeacherSql, findTeacherValues, (err, results) => {
      if (err) {
        console.error(`Error finding teacher: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Teacher ${teacher.teacher_name} does not exist.`);
      } else {
        teacher.unassignFromCourse(course);
      }
    });
  }

  // Method to display the list of courses taught by the teacher
  static displayCoursesTaught(teacher) {
    // Validate if the teacher exists
    const findTeacherSql = 'SELECT * FROM teachers WHERE teacher_id = ?';
    const findTeacherValues = [teacher.teacher_id];

    db.query(findTeacherSql, findTeacherValues, (err, results) => {
      if (err) {
        console.error(`Error finding teacher: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Teacher ${teacher.teacher_name} does not exist.`);
      } else {
        teacher.displayCoursesTaught();
      }
    });
  }

  // Other teacher-related methods
  // ...
}

module.exports = TeacherController;
