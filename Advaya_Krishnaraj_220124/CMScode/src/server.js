// server.js
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const courseRoutes = require('./routes/courseRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
app.use(cors());
const app = express();
app.use(express.json());
const PORT = 5000;

app.use('/admin', adminRoutes);
app.use('/course', courseRoutes);
app.use('/teacher', teacherRoutes);
app.use('/student', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
