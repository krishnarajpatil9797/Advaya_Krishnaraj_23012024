// models/Course.js
const db = require('../db');

class Course {
  constructor(course_id, course_name, max_students) {
    this.course_id = course_id;
    this.course_name = course_name;
    this.max_students = max_students;
    this.enrolled_students = []; // to keep track of enrolled students
  }

  // Method to add a student to the course
  addStudent(student) {
    if (this.enrolled_students.length < this.max_students) {
      this.enrolled_students.push(student);
      console.log(`Student ${student.student_name} added to the course ${this.course_name}`);
    } else {
      console.log(`Course ${this.course_name} is full. Cannot add more students.`);
    }
  }

  // Method to remove a student from the course
  removeStudent(student) {
    const index = this.enrolled_students.findIndex((s) => s.student_id === student.student_id);
    if (index !== -1) {
      this.enrolled_students.splice(index, 1);
      console.log(`Student ${student.student_name} removed from the course ${this.course_name}`);
    } else {
      console.log(`Student ${student.student_name} is not enrolled in the course ${this.course_name}`);
    }
  }

  // Method to display the list of enrolled students
  displayEnrolledStudents() {
    console.log(`Enrolled students in the course ${this.course_name}:`);
    this.enrolled_students.forEach((student) => {
      console.log(`${student.student_id} - ${student.student_name}`);
    });
  }

  // Other methods related to Course
  // ...
}

module.exports = Course;

