import React from 'react';

const Categories = ({ categoryId, setCategoryId }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const handleClickCategory = (index) => {
    setCategoryId(index);
  };

  return (
    <nav className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={index}
            onClick={() => handleClickCategory(index)}
            className={categoryId === index ? 'categories-item--active' : ''}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
