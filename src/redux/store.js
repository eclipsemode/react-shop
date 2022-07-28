import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './features/filterSlice';
import productsSlice from './features/productsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    products: productsSlice,
  },
});
