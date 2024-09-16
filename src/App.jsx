// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header'; 
import IntroSection from './components/IntroSection';
import MyButton from './components/Button';
import { useState } from 'react';
import { differences } from './data';
import TeachingSection from './components/Teacing';
function App() {

  function handClick() {
    setContent('Button clicked!');
}
  return (
    <div className="App">
      <Header />
      <main>
        <TeachingSection />

      </main>
    </div>
  );
}

export default App;
