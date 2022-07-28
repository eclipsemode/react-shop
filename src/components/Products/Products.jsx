import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/features/productsSlice';
import axios from 'axios';

import Pizza from './Pizza/Pizza';
import Skeleton from './Pizza/Skeleton';

const Products = ({ className, categoryId, sortNameId }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const searchValue = useSelector((state) => state.filter.value);
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        window.scrollTo(0, 0);
        setIsLoading(true);
        const response = await axios.get(
          'https://62d7c93949c87ff2af3cd25a.mockapi.io/products?' +
            (categoryId ? 'category=' + categoryId + '&' : '') +
            'sortBy=' +
            sortNameId.sortType +
            '&order=' +
            sortNameId.orderType +
            (searchValue ? '&search=' + searchValue : '')
        );
        return response.data;
      } catch (error) {
        console.error('Products fetching problem: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts().then((data) => dispatch(setProducts(data)));
  }, [categoryId, sortNameId, searchValue, dispatch]);

  return (
    <div className={className}>
      {isLoading
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : products.map((product) => <Pizza key={product.id} {...product} />)}
    </div>
  );
};

export default Products;
