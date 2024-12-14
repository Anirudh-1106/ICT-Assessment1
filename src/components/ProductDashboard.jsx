import React from 'react';
import './ProductDashboard.css';

const ProductDashboard = () => {
  const products=[
    {
      id: 1,
      title: 'Nike Running Shoes',
      price: 129.99,
      thumbnail:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png',
      category: 'Sports'
    },
    {
      id: 2,
      title: 'Adidas Football Jersey',
      price: 79.99,
      thumbnail:'https://contents.mediadecathlon.com/m14868853/8bde7bc18b5eb50a8ed6fdcdeb51b6d9/m14868853.jpg?format=auto&quality=70&f=2520x0',
      category: 'Sports Wear'
    },
    {
      id: 3,
      title: 'Basketball',
      price: 49.99,
      thumbnail:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png',
      category: 'Sports Equipment'
    },
    {
      id: 4,
      title: 'Tennis Racket',
      price: 199.99,
      thumbnail:'https://au.wilson.com/cdn/shop/products/WR108611U_9_ULTRA_108_V4_BU.png.high-res_1024x1024.jpg?v=1660006819',
      category: 'Sports Equipment'
    },
    {
      id: 5,
      title: 'Fitness Tracker Watch',
      price: 149.99,
      thumbnail:'https://www.layers.shop/cdn/shop/files/Anarc-black-1.webp?v=1731329012&width=1946',
      category: 'Sports Accessories'
    },
    {
      id: 6,
      title: 'Yoga Mat',
      price: 39.99,
      thumbnail:'https://m.media-amazon.com/images/I/71b5fW+s18L.jpg',
      category: 'Sports Accessories'
    }
  ];

  return (
    <div className="product-dashboard">
      <h1>Sports Products</h1>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
