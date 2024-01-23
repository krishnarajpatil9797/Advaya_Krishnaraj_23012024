// controllers/adminController.js
const Course = require('../models/Course');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const db = require('../db');

class AdminController {
  // Method to add a new course
  static addCourse(course_id, course_name, max_students) {
    const newCourse = new Course(course_id, course_name, max_students);

    // Save the course details to the database
    
    const sql = 'INSERT INTO courses (course_id, course_name, max_students) VALUES (?, ?, ?)';
    const values = [newCourse.course_id, newCourse.course_name, newCourse.max_students];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(`Error adding course: ${err.message}`);
        return;
      }

      console.log(`Course ${newCourse.course_name} added successfully.`);
    });
  }

 // Method to remove a course
//  static removeCourse(course) {
//     // Validate if the course exists
//     const findCourseSql = 'SELECT * FROM courses WHERE course_id = ?';
//     const findCourseValues = [course.course_id];

//     db.query(findCourseSql, findCourseValues, (err, results) => {
//       if (err) {
//         console.error(`Error finding course: ${err.message}`);
//         return;
//       }

//       if (results.length === 0) {
//         console.log(`Course ${course.course_name} does not exist.`);
//       } else {
//         // Perform removal logic
//         const deleteCourseSql = 'DELETE FROM courses WHERE course_id = ?';
//         const deleteCourseValues = [course.course_id];
       
//         db.query(deleteCourseSql, deleteCourseValues, (err) => {
//           if (err) {
//             console.error(`Error removing course: ${err.message}`);
//             return;
//           }
//           console.log(course.course_id);
//           console.log(`Course ${course.course_name} removed successfully.`);
//         });
//       }
//     });
//   }
  static removeCourse(course) {
    // Validate if the course exists
    const findCourseSql = 'SELECT * FROM courses WHERE course_id = ?';
    const findCourseValues = [course.course_id];
  
    db.query(findCourseSql, findCourseValues, (err, results) => {
      if (err) {
        console.error(`Error finding course: ${err.message}`);
        return;
      }
  
      if (results.length === 0) {
        console.log(`Course with ID ${course.course_id} does not exist.`);
      } else {
        // Perform removal logic
        const deleteCourseSql = 'DELETE FROM courses WHERE course_id = ?';
        const deleteCourseValues = [course.course_id];
  
        db.query(deleteCourseSql, deleteCourseValues, (err) => {
          if (err) {
            console.error(`Error removing course: ${err.message}`);
            return;
          }
          
          console.log(`Course with ID ${course.course_id} removed successfully.`);
        });
      }
    });
  }
  
  // Method to add a new teacher
  static addTeacher(teacher_id, teacher_name) {
    const newTeacher = new Teacher(teacher_id, teacher_name);

    // Save the teacher details to the database
    const sql = 'INSERT INTO teachers (teacher_id, teacher_name) VALUES (?, ?)';
    const values = [newTeacher.teacher_id, newTeacher.teacher_name];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(`Error adding teacher: ${err.message}`);
        return;
      }

      console.log(`Teacher ${newTeacher.teacher_name} added successfully.`);
    });
  }

  // Method to remove a teacher
  static removeTeacher(teacher) {
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
        // Perform removal logic
        const deleteTeacherSql = 'DELETE FROM teachers WHERE teacher_id = ?';
        const deleteTeacherValues = [teacher.teacher_id];

        db.query(deleteTeacherSql, deleteTeacherValues, (err) => {
          if (err) {
            console.error(`Error removing teacher: ${err.message}`);
            return;
          }

          console.log(`Teacher ${teacher.teacher_name} removed successfully.`);
        });
      }
    });
  }

  // Method to add a new student
  static addStudent(student_id, student_name) {
    const newStudent = new Student(student_id, student_name);

    // Save the student details to the database
    const sql = 'INSERT INTO students (student_id, student_name) VALUES (?, ?)';
    const values = [newStudent.student_id, newStudent.student_name];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(`Error adding student: ${err.message}`);
        return;
      }

      console.log(`Student ${newStudent.student_name} added successfully.`);
    });
  }
 // Method to remove a student
 static removeStudent(student) {
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
        // Perform removal logic
        const deleteStudentSql = 'DELETE FROM students WHERE student_id = ?';
        const deleteStudentValues = [student.student_id];

        db.query(deleteStudentSql, deleteStudentValues, (err) => {
          if (err) {
            console.error(`Error removing student: ${err.message}`);
            return;
          }

          console.log(`Student ${student.student_name} removed successfully.`);
        });
      }
    });
  }

  // Other admin-related methods
  // ...
}

module.exports = AdminController;
