import React from 'react';
import '../scss/Footer.scss'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О нас</h3>
          <p>Мы предоставляем лучшие услуги для наших клиентов.</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <ul>
            <li><a href="mailto:info@example.com">info@example.com</a></li>
            <li><a href="tel:+123456789">+123 456 789</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ваша Компания. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;