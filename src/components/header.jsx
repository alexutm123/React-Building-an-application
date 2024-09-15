// src/components/Header.jsx
import React from 'react';
import '../scss/header.scss';
import logo from '../../public/vite.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Vite logo" />
        <a href="/" className="text-uppercase">Your Logo</a>
      </div>
      <nav className="header-nav">
        <ul className="header-menu pb-0 mb-0">
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
