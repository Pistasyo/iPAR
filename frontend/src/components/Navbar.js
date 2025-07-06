// src/components/Navbar.js
import React from 'react';
import '../App.css' // Optional, for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">i-PAR</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
