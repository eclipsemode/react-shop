import React from 'react';
import categoryReducer from './reducer';

const Categories = () => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  // noinspection JSCheckFunctionSignatures
  const [categoryState, categoryDispatch] = React.useReducer(
    categoryReducer,
    0
  );

  const handleClickCategory = (value) => {
    categoryDispatch({ payload: value });
  };

  return (
    <nav className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={index}
            onClick={() => handleClickCategory(index)}
            className={categoryState === index ? 'categories-item--active' : ''}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
