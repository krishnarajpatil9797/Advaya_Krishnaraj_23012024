// models/Student.js
const db = require('../db');

class Student {
  constructor(student_id, student_name) {
    this.student_id = student_id;
    this.student_name = student_name;
    this.enrolled_courses = [];
  }

  // Method to enroll in a course
  enrollInCourse(course) {
    if (!this.isEnrolledInCourse(course)) {
      this.enrolled_courses.push(course);
      console.log(`Student ${this.student_name} enrolled in the course ${course.course_name}`);
    } else {
      console.log(`Student ${this.student_name} is already enrolled in the course ${course.course_name}`);
    }
  }

  // Method to withdraw from a course
  withdrawFromCourse(course) {
    const index = this.enrolled_courses.findIndex((c) => c.course_id === course.course_id);
    if (index !== -1) {
      this.enrolled_courses.splice(index, 1);
      console.log(`Student ${this.student_name} withdrew from the course ${course.course_name}`);
    } else {
      console.log(`Student ${this.student_name} is not enrolled in the course ${course.course_name}`);
    }
  }

  // Method to display the list of enrolled courses
  displayEnrolledCourses() {
    console.log(`Courses enrolled by Student ${this.student_name}:`);
    this.enrolled_courses.forEach((course) => {
      console.log(`${course.course_id} - ${course.course_name}`);
    });
  }

  // Other methods related to Student
  // ...

  // Method to check if the student is enrolled in a specific course
  isEnrolledInCourse(course) {
    return this.enrolled_courses.some((c) => c.course_id === course.course_id);
  }
}

module.exports = Student;
