import { createSlice } from "@reduxjs/toolkit";

const genderSlice = createSlice({
    name:"gender",
    initialState:{
        male:true,
        female:true,
    },
    reducers:{
        ToggleGender : (state, action) => {
            console.log(state.male);
            console.log(action.payload);

        }
    }

});

export const { ToggleGender } = genderSlice.actions;
export default genderSlice.reducer;