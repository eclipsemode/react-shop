import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortId: 0,
  value: '',
  sortType: 'rating',
  sortOrder: 'asc',
  categoryNumber: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
    clearSearchValue: (state) => {
      state.value = '';
    },
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setCategoryNumber: (state, action) => {
      state.categoryNumber = action.payload;
    },
  },
});

export const {
  setSearchValue,
  clearSearchValue,
  setSortId,
  setSortType,
  setSortOrder,
  setCategoryNumber,
} = filterSlice.actions;

export default filterSlice.reducer;
