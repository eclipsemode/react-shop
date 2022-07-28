import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setSortType,
  setId,
  setSortOrder,
} from '../../../redux/features/filterSlice';

const Popup = ({ popupHidden, sortNames, className, handlePopup }) => {
  const sortId = useSelector((state) => state.filter.id);
  const dispatch = useDispatch();

  const handleSortType = (id) => {
    sortNames.forEach((item) =>
      item.id === id
        ? dispatch(setSortType(item.sortType)) &&
          dispatch(setSortOrder(item.orderType)) &&
          dispatch(setId(item.id))
        : null
    );
    handlePopup();
  };

  return (
    <div hidden={popupHidden} className={className}>
      <ul>
        {sortNames.map((name) => (
          <li
            key={name.id}
            className={sortId === name.id ? 'active' : ''}
            onClick={() => handleSortType(name.id)}
          >
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
