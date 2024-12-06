// server/config/db.js
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });  // Add path to ensure .env is found

const connectDB = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI); // Temporary debug log
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error details:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;