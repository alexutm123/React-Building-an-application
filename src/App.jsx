// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/header'; 
import IntroSection from './components/IntroSection';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />
  
      </main>
    </div>
  );
}

export default App;
