import React from 'react';
import styles from './search.module.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Search = ({ searchValue, setSearchValue }) => {
  const clearSearchValue = () => setSearchValue('');
  return (
    <div className={styles.root}>
      <BsSearch className={styles.icon} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск..."
      />
      {searchValue && (
        <AiOutlineClose
          onClick={() => clearSearchValue()}
          className={styles.icon_close}
        />
      )}
    </div>
  );
};

export default Search;
