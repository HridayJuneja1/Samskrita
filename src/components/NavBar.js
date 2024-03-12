import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Explore</div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/mybooks">My Books</Link>
        <Link>Profile</Link>
        <Link>Cart</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/login"><button className="login-btn">Log in</button></Link>
        {}
        <Link to="/signup"><button className="signup-btn">Sign up</button></Link> 
        {}
        <Link to = "/change-password"><button className="change-password-btn">Change Password</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
