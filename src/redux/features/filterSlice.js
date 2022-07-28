import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  value: '',
  sortType: 'rating',
  sortOrder: 'asc',
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
    setId: (state, action) => {
      state.id = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setSearchValue,
  clearSearchValue,
  setId,
  setSortType,
  setSortOrder,
} = filterSlice.actions;

export default filterSlice.reducer;
