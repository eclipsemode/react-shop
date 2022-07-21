import React from 'react';
import styles from './NotFoundBlock.module.css';

const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      <span>:(</span>
      <br />
      Ничего не найдено.
    </h1>
  );
};

export default NotFoundBlock;
