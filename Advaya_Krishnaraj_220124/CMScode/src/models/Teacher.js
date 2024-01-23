// models/Teacher.js
const db = require('../db');

class Teacher {
  constructor(teacher_id, teacher_name) {
    this.teacher_id = teacher_id;
    this.teacher_name = teacher_name;
    this.courses_taught = [];
  }

  // Method to assign a teacher to a course
  assignToCourse(course) {
    if (this.courses_taught.length < 5) {
      this.courses_taught.push(course);
      console.log(`Teacher ${this.teacher_name} assigned to the course ${course.course_name}`);
    } else {
      console.log(`Teacher ${this.teacher_name} cannot be assigned to more than 5 courses.`);
    }
  }

  // Method to unassign a teacher from a course
  unassignFromCourse(course) {
    const index = this.courses_taught.findIndex((c) => c.course_id === course.course_id);
    if (index !== -1) {
      this.courses_taught.splice(index, 1);
      console.log(`Teacher ${this.teacher_name} unassigned from the course ${course.course_name}`);
    } else {
      console.log(`Teacher ${this.teacher_name} is not assigned to the course ${course.course_name}`);
    }
  }

  // Method to display the list of courses taught by the teacher
  displayCoursesTaught() {
    console.log(`Courses taught by Teacher ${this.teacher_name}:`);
    this.courses_taught.forEach((course) => {
      console.log(`${course.course_id} - ${course.course_name}`);
    });
  }

  // Other methods related to Teacher
  // ...

  // Method to check if the teacher is assigned to a specific course
  isAssignedToCourse(course) {
    return this.courses_taught.some((c) => c.course_id === course.course_id);
  }
}

module.exports = Teacher;
