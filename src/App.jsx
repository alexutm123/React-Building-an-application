// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Hero from './components/Hero';
import { Cinemas } from './components/cinemas/component';
import { cinemas } from './data';
import Footer from './components/Footer';

function App() {

  return (
<div>
      <Header />
       <main>
       <Hero />
          <Cinemas cinemas={cinemas} />
      </main>
      <Footer />
      </div>
  );
}

export default App;
