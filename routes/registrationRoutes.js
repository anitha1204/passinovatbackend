// routes/registrationRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/registrationController');
const router = express.Router();

// POST route for user registration
router.post('/register', registerUser);

module.exports = router;
