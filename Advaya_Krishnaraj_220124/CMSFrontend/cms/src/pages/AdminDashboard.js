import React, { useEffect, useState } from 'react';
import CourseList from '../components/CourseList';
import api from '../services/api';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getCourses();
        setCourses(data);
      } catch (error) {
        // Handle the error here if needed
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CourseList courses={courses} />
      {/* Add other components as needed */}
    </div>
  );
};

export default AdminDashboard;
