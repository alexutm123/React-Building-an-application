// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header'; 
import IntroSection from './components/IntroSection';
import MyButton from './components/Button';
import { useState } from 'react';
import { differences } from './data';
import TeachingSection from './components/Teacing';
import Hero from './components/Hero';
function App() {

  function handClick() {
    setContent('Button clicked!');
}
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeachingSection />

      </main>
      </>
  );
}

export default App;
