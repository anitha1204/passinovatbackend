// server.js
const express = require('express');
const connectDB = require('./config/db');  // Database connection logic
const registrationRoutes = require('./routes/registrationRoutes');
const cors = require('cors');

const app = express();

// Connect to the MongoDB database
connectDB();

// Init Middleware (body parser)
app.use(express.json({ extended: false }));

// CORS setup to allow cross-origin requests
app.use(cors());

// Define Routes
app.use('/api', registrationRoutes);

// Set the port for the server to listen on
const PORT = 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
