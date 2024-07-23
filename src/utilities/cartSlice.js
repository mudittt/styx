import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
  },
  reducers: {
    addItem: (state, action) => {
      // state is the initial state
      // action => the event which caused the dispatch of an action
      if (action.payload.id in state.cartItems){
        state.cartItems[action.payload.id].quantity++;
      }
      else{
        state.cartItems[action.payload.id] = data[action.payload.id];
      }
    },
    clearItem: (state, action) => {
      
      const { id } = action.payload;
      if (id in state.cartItems) {
        delete state.cartItems[id];
      }
    },
  },
});

export const { addItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
