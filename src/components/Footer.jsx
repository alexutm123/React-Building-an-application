import React from 'react';
import '../scss/Footer.scss'; 

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>MyWebsite</h1>
          </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </nav>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MyWebsite. Все права защищены.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;