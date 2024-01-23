import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.course_id}>{course.course_name}</li>
        ))}
      </ul>
    </div>
  );
};
//course component
export default CourseList;
