import React, { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: '', image: '', price: '', category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product:', product);
    alert('Product Added!');
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-2 border rounded-sm">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-1 border text-xs rounded-sm"
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-1 border text-xs rounded-sm"
          value={product.image}
          onChange={(e) => setProduct({...product, image: e.target.value})}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full p-1 border text-xs rounded-sm"
          value={product.price}
          onChange={(e) => setProduct({...product, price: e.target.value})}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full p-1 border text-xs rounded-sm"
          value={product.category}
          onChange={(e) => setProduct({...product, category: e.target.value})}
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white text-xs p-1 rounded-sm"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;