import { useState } from 'react'

import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Categories from './pages/categories/Categories';

function App() {
  return (
    <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </MainLayout>
  </Router>
  )
}

export default App
