import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const { addToCart, deleteFromCart } = cartSlice.actions;
export { addToCart, deleteFromCart };
export default cartSlice;
