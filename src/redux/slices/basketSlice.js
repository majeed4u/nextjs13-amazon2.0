import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
