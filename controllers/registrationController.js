// controllers/registrationController.js
const Registration = require('../models/Registration');

const registerUser = async (req, res) => {
  try {
    // Create a new user instance with the data from the request body
    const newUser = new Registration(req.body);

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle any errors (like validation errors)
    res.status(400).json({ error: 'Error registering user', details: error.message });
  }
};

module.exports = { registerUser };
