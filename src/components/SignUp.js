import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Use relative URL here
      await axios.post('/api/users/register', { email, password });
      // Use navigate to redirect
      navigate('/signup-confirmation');
    } catch (error) {
      console.error('Failed to register', error);
      alert('Failed to register');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Sign Up</h2>
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
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <input 
          type="password" 
          className="input" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
          required 
        />
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
