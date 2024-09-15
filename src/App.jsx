// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header'; 
import IntroSection from './components/IntroSection';
import MyButton from './components/Button';
import { useState } from 'react';

function App() {
  const stateArray=useState();
  const [content, setContent] = useState('Click me!');
  function handClick() {
    setContent('Button clicked!');
}
  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection title="Welcome to Our Website" />
        <p className="d-flex justify-content-center align-items-center">{content}</p>
        <MyButton isActive={content==='Button clicked!'} onClick={handClick}>Button</MyButton>
      </main>
    </div>
  );
}

export default App;
