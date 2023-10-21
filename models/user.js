/*
    User Account Database Model
*/

// Require dependencies
const mongoose = require('mongoose');
const uuid = require('uuid');
const fs = require('fs');

// User account schema
const userSchema = new mongoose.Schema({
  // UUID for staff user account
  id: {
    type: String,
    unique: true,
    trim: true,
    default: uuid.v4
  },
  // An array of past logins
  loginHistory: {
    type: Array,
    default: []
  },
  // The date/timestamp from when the account was created
  dateCreated: {
    type: Date,
    default: Date.now
  },
  // The date/timestamp from when the account was last logged in to
  dateLastLogin: {
    type: Date,
  },
  // The user name/handle for the user account
  username: {
    type: String,
    trim: true
  },
  // The legal name for the person to whom this user account belongs
  firstName: {
    type: String,
    trim: true
  },
  middleName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  // The user's profile image as base64 PNG
  profileImageBase64: {
    type: String,
  },
  // The email address for the user account
  email: {
    type: String,
    trim: true
  },
  // The password or password hash used for authentication
  password: {
    type: String,
  },
  // The date when the password was last changed
  datePasswordLastChanged: {
    type: Date,
    default: Date.now
  },
});

// Create a mongoose model from that schema
const User = mongoose.model('User', userSchema);

// Export the model to be used elsewhere
module.exports = User;
