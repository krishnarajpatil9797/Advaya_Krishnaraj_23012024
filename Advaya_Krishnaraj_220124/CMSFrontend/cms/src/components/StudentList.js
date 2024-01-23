// components/Student.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the backend
    api.getStudents().then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.student_id}>{student.student_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
