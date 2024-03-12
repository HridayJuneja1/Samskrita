const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/user.model'); // Adjust this path as necessary
const router = express.Router();

// Configure nodemailer to use Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hridayjuneja04@gmail.com', // Your Gmail address
    pass: 'mdej psmy dvrv wgwu', // Your App Password
  },
});

// Signup route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const verificationToken = crypto.randomBytes(20).toString('hex');

    const newUser = new User({
      email,
      password: hashedPassword,
      verificationToken,
      verified: false, // Initially, the user is not verified
    });

    await newUser.save();

    const baseUrl = req.protocol + '://' + req.get('host');
    const verificationUrl = `${baseUrl}/api/users/verify/${verificationToken}`;


    // Send verification email
    await transporter.sendMail({
      from: 'hridayjuneja6969@gmail.com', // Your Gmail address
      to: newUser.email,
      subject: 'Verify your email',
      html: `Please click this link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a>`,
    });

    res.status(201).json({ message: 'Registration successful! Please check your email to verify your account.' });
  } catch (error) {
    res.status(400).json({ error: 'Error: ' + error.message });
  }
});

// Email verification route
router.get('/verify/:token', async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });

    if (!user) {
      return res.status(400).send('Invalid or expired verification link.');
    }

    user.verified = true;
    user.verificationToken = ''; // Clear the verification token
    await user.save();

    // Redirect or inform the user that the account has been verified successfully
    res.send('Account verified successfully! You can now log in.');
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'User not found.' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password.' });
      }
  
      if (!user.verified) {
        return res.status(403).json({ error: 'Please verify your email to login.' });
      }
  
      // Attempt to send login notification email
      try {
        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: user.email,
          subject: 'New login detected',
          html: 'A new login to your account was detected. If this was not you, please change your password immediately.',
        });
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Decide how to handle email failure; for now, we log and continue
      }
  
      res.json({ authenticated: true });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed due to technical issues.' });
    }
});


router.post('/change-password', async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ success: false, message: "User not found." });
      }
      
      const passwordIsValid = await bcrypt.compare(oldPassword, user.password);
      if (!passwordIsValid) {
          return res.status(401).json({ success: false, message: "Incorrect old password." });
      }
      
      // Hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedNewPassword = await bcrypt.hash(newPassword, salt);
      
      // Update user's password
      user.password = hashedNewPassword;
      await user.save();
      
      res.json({ success: true, message: "Password changed successfully." });
  } catch (error) {
      console.error('Change Password Error:', error);
      res.status(500).json({ success: false, message: "Failed to change password due to technical issues." });
  }
});

module.exports = router;
