import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setSearchValue,
  clearSearchValue,
} from '../../redux/features/filterSlice';
import styles from './search.module.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Search = () => {
  const searchValue = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const handleCloseButton = () => dispatch(clearSearchValue());

  return (
    <div className={styles.root}>
      <BsSearch className={styles.icon} />
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
      />
      {searchValue && (
        <AiOutlineClose
          onClick={() => handleCloseButton()}
          className={styles.icon_close}
        />
      )}
    </div>
  );
};

export default Search;
