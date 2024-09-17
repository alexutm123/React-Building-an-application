// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Hero from './components/Hero';
import { Cinemas } from './components/cinemas/component';
import { cinemas } from './data';
import Footer from './components/Footer';
import { Layout } from './components/layout/components';

function App() {

  return (
       <Layout>
          <Hero />
          <Cinemas cinemas={cinemas} />
      </Layout>
  );
}

export default App;
