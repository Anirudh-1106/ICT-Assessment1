import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold">Product Hub</h1>
        <div className="flex items-center">
          <Link 
            to="/" 
            style={{ marginRight: '20px' }} // Explicit inline style
            className="text-[10px] text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link 
            to="/add-product" 
            className="text-[10px] bg-blue-500 text-white px-2 py-1 rounded-sm"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;