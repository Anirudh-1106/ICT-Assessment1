import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-lg font-bold text-gray-800">Product Management</h1>
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-sm text-gray-600 hover:text-blue-500"
          >
            Home
          </Link>
          <Link 
            to="/add-product" 
            className="text-sm bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
