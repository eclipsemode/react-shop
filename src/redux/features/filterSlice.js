import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
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
  },
});

export const { setSearchValue, clearSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
