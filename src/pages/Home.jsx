import React, { useState } from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Products from '../components/Products/Products';

const Home = () => {
  const [categoryId, setCategoryId] = useState(0);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Products className="content__items" categoryId={categoryId} />
    </>
  );
};

export default Home;
