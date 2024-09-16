import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "./ProductsSlice";

export const productStore = configureStore({
  reducer: {
    reducer: productReducer,
  },
});