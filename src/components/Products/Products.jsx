import React from 'react';
import products from '../../assets/data/products.json';
import Pizza from './Pizza/Pizza';

const Products = ({ className }) => {
  return (
    <div className={className}>
      {products.map((product) => (
        <Pizza key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
