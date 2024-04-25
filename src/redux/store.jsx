import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
  },

  devTools: true,
});
export { store };
