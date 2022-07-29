import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryNumber } from '../../redux/features/filterSlice';

const Categories = () => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const dispatch = useDispatch();
  const categoryNumber = useSelector((state) => state.filter.categoryNumber);

  const handleClickCategory = (index) => {
    dispatch(setCategoryNumber(index));
  };

  return (
    <nav className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={index}
            onClick={() => handleClickCategory(index)}
            className={
              categoryNumber === index ? 'categories-item--active' : ''
            }
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
