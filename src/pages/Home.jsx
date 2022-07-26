import React, { useState } from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Products from '../components/Products/Products';

const Home = ({ searchValue }) => {
  const [categoryId, setCategoryId] = useState(0);
  const [sortNameId, setSortNameId] = React.useState({
    id: 0,
    sortType: 'rating',
    orderType: 'asc',
  });

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort sortNameId={sortNameId} setSortNameId={setSortNameId} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Products
        className="content__items"
        categoryId={categoryId}
        sortNameId={sortNameId}
        searchValue={searchValue}
      />
    </>
  );
};

export default Home;
