// src/App.jsx
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/product" element={<Product />} />
        <Route path="/store/:storeId" element={<Shop />} />
      </Routes>
  </Router>
  );
}

export default App;
