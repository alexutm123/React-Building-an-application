import React, { useState, useEffect } from 'react';
import '../scss/header.scss';
import logo from '../../public/vite.svg';
import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Vite logo" />
          <Link to="/" className="text-uppercase">Your Logo</Link>
        </div>
        <nav className="header-nav">
          <ul className="header-menu pb-0 mb-0">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shops">Shops</Link></li>
            <li><Link to="/product">Product</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <span>Time: {now.toLocaleTimeString()}</span>
        </div>
      </header>
    </>
  );
};

export default Header;
