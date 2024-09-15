// src/components/IntroSection.jsx
import React from 'react';
import '../scss/IntroSection.scss';
function Teachers(props) {
  return (
    <>
    <h1>{props.title}</h1>
      <li>1. JavaScript Developer</li>
      <li>2. HTML/CSS Developer</li>
      <li>3. React Developer</li>
      <li>4. Node.js Developer</li>
      <li>5. Front-end Developer</li>
      <li>6. Full-stack Developer</li>
    </>
  );
}
const IntroSection = () => {
  return (
    <section className="intro-section">
      <h1>Welcome to Our Website</h1>
     <ul>
  <Teachers/>
     </ul>
    </section>
  );
};

export default IntroSection;
