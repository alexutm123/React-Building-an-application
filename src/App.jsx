// src/App.jsx
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
  </Router>
  );
}

export default App;
