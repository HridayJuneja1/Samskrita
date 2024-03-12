import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      // Assuming the backend sends a response indicating successful authentication
      if (response.data.authenticated) {
        alert('Login successful');
        // Redirect user or update UI accordingly
      } else {
        // Handle case where `authenticated` is false or not present, if applicable
        alert('Login failed: Invalid email or password');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized error specifically
        alert('Login failed: Invalid email or password');
      } else {
        // Handle other errors
        console.error('Login error:', error);
        alert('Login failed due to technical issues');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleLogin} className="form">
        <h2 className="title">Login</h2>
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
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
