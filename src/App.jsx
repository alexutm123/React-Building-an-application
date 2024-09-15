// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header'; 
import IntroSection from './components/IntroSection';
import MyButton from './components/Button';

function App() {
  function handClick() {
    alert('Button clicked!');
}
  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection title="Welcome to Our Website" />
        <MyButton onClick={handClick}>Button</MyButton>
      </main>
    </div>
  );
}

export default App;
