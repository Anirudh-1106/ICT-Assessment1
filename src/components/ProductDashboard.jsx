import React, { useState, useEffect } from 'react';
import './ProductDashboard.css';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-dashboard">
      <h1 className="dashboard-title">Product Management Dashboard</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.image} // Correct property for image
              alt={product.title} 
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-category">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;

