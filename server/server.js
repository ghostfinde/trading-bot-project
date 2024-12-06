// server/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...'); // Debug log
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});