import React from 'react';
import Pizza from './Pizza/Pizza';
import axios from 'axios';

const Products = ({ className }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          'https://62d7c93949c87ff2af3cd25a.mockapi.io/products'
        );
        return response.data;
      } catch (error) {
        console.error('Products fetching problem: ' + error.message);
      }
    }

    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className={className}>
      {products.map((product) => (
        <Pizza key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
