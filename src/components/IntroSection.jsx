// src/components/IntroSection.jsx
import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <h1>Welcome to Our Website</h1>
      <p>
        We offer a wide range of services to meet your needs. Whether you are looking for professional services or personal assistance, we have everything covered.
      </p>
      <button className="cta-button">Learn More</button>
    </section>
  );
};

export default IntroSection;
