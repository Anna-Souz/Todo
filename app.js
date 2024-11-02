const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./utils/logger');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(logger); // Log each request

// Routes
app.use('/api/tasks', taskRoutes); // Ensure this line is included

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List API');
});

module.exports = app;
