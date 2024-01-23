// controllers/courseController.js
const Course = require('../models/Course');
const db = require('../db');

class CourseController {
  //Method to add a student to the course
  static addStudentToCourse(course, student) {
    // Validate if the course exists
    const findCourseSql = 'SELECT * FROM courses WHERE course_id = ?';
    const findCourseValues = [course.course_id];

    db.query(findCourseSql, findCourseValues, (err, results) => {
      if (err) {
        console.error(`Error finding course: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Course ${course.course_name} does not exist.`);
      } else {
        // Validate if the student is not already enrolled
        if (!course.isEnrolled(student)) {
          course.addStudent(student);
          console.log(`Student ${student.student_name} added to the course ${course.course_name}`);
        } else {
          console.log(`Student ${student.student_name} is already enrolled in the course ${course.course_name}`);
        }
      }
    });
  }

  static getAllCourses(req, res) {
    const getAllCoursesSql = 'SELECT * FROM courses';

    db.query(getAllCoursesSql, (err, results) => {
      if (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.json(results);
    });
  }

  // Method to remove a student from the course
  static removeStudentFromCourse(course, student) {
    // Validate if the course exists
    const findCourseSql = 'SELECT * FROM courses WHERE course_id = ?';
    const findCourseValues = [course.course_id];

    db.query(findCourseSql, findCourseValues, (err, results) => {
      if (err) {
        console.error(`Error finding course: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Course ${course.course_name} does not exist.`);
      } else {
        // Validate if the student is enrolled
        if (course.isEnrolled(student)) {
          course.removeStudent(student);
          console.log(`Student ${student.student_name} removed from the course ${course.course_name}`);
        } else {
          console.log(`Student ${student.student_name} is not enrolled in the course ${course.course_name}`);
        }
      }
    });
  }

  // Method to display the list of enrolled students
  static displayEnrolledStudents(course) {
    // Validate if the course exists
    const findCourseSql = 'SELECT * FROM courses WHERE course_id = ?';
    const findCourseValues = [course.course_id];

    db.query(findCourseSql, findCourseValues, (err, results) => {
      if (err) {
        console.error(`Error finding course: ${err.message}`);
        return;
      }

      if (results.length === 0) {
        console.log(`Course ${course.course_name} does not exist.`);
      } else {
        course.displayEnrolledStudents();
      }
    });
  }
}

module.exports = CourseController;
