import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-product" element={<AddProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;