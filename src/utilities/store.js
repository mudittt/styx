import { configureStore } from "@reduxjs/toolkit";
import genderSlice from "./genderSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        gender:genderSlice,
        cart:cartSlice
    }
})