// File: /models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String, required: false }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
