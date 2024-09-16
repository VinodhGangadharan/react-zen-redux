import { createSlice } from "@reduxjs/toolkit";

const findindex = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
  }
  return null;
};
const prodcutsSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {
    showProducts: (state, action) => {
      return action.payload;
    },
    incrementProduct: (state, action) => {
      let { id } = action.payload;
      let index = findindex(state, id);
      if (index !== null) {
        state[index].quantity = (state[index].quantity || 1) + 1;
      }
    },
    decrementProduct: (state, action) => {
      //console.log("decremented");
      let { id } = action.payload;
      let index = findindex(state, id);
      if (index !== null && state[index].quantity > 1) {
        state[index].quantity = state[index].quantity - 1;
      }
    },
    removeProduct: (state, action) => {
      let { id } = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const {
  showProducts,
  incrementProduct,
  decrementProduct,
  removeProduct,
} = prodcutsSlice.actions;
export const productReducer = prodcutsSlice.reducer;