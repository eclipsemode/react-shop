import React from 'react';
import Pizza from './Pizza/Pizza';
import axios from 'axios';
import Skeleton from './Pizza/Skeleton';

const Products = ({ className }) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          'https://62d7c93949c87ff2af3cd25a.mockapi.io/products'
        );
        return response.data;
      } catch (error) {
        console.error('Products fetching problem: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className={className}>
      {isLoading
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : products.map((product) => <Pizza key={product.id} {...product} />)}
    </div>
  );
};

export default Products;
