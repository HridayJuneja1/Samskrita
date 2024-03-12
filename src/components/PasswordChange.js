import React, { useState } from 'react';
import axios from 'axios';
import './PasswordChange.css';

function PasswordChange() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState(''); // Change to oldPassword for clarity
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      // Use a relative URL here
      const response = await axios.post('/api/users/change-password', { email, oldPassword, newPassword });
      if (response.data.success) {
        alert('Password changed successfully.');
      } else {
        alert('Failed to change password.');
      }
    } catch (error) {
      console.error('Password change error:', error);
      alert('Failed to change password due to technical issues.');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Change Password</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Old Password"
          required
        />
        <input
          type="password"
          className="input"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <input
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
          required
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default PasswordChange;
