const BASE_URL = 'http://localhost:5000'; // Replace with your Node.js server URL

const api = {
  getCourses: async () => {
    try {
      const response = await fetch(`${BASE_URL}/course/courses`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  },
  // Add other API functions as needed
};

export default api;
