import React from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Products from '../components/Products/Products';

const Home = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Products className="content__items" />
    </>
  );
};

export default Home;
