import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./stockSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        stock:stockSlice,
        cart:cartSlice
    }
})