// src/components/Header.jsx
import React from 'react';
import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">Your Logo</a>
      </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="btn login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
