// // models/Registration.js
// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   firstName: String,
//   lastName: String,
//   phoneNumber: String,
//   currentCity: String,
//   languages: String,
//   gender: String,
//   type: String
// });

// module.exports = mongoose.model('Registration', registrationSchema);


// models/Registration.js
const mongoose = require('mongoose');

// Registration schema with validation and more options for 'type'
const registrationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures email is unique
    lowercase: true,  // Converts the email to lowercase
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'], // Email validation regex
  },
  password: {
    type: String,
    required: true,
    minlength: 6,  // Password must be at least 6 characters long
  },
  firstName: {
    type: String,
    required: true,
    trim: true,  // Trims any extra spaces
  },
  lastName: {
    type: String,
    required: true,
    trim: true,  // Trims any extra spaces
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'], // Validates international phone numbers
  },
  currentCity: {
    type: String,
    required: true,
    trim: true,
  },
  languages: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], // Update this list as needed
    required: true,
  },
  type: {
    type: String,
    enum: [
      'College student',
      'Tech aspirant',
      'Fresher',
      'Experienced professional',
      'Home maker',
      'Other',
    ], // Update this list as needed
    required: true,
  },
}, {
  timestamps: true,  // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Registration', registrationSchema);
