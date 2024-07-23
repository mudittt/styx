import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";


const filter = (data, male, female) => {
    const filteredData = {};
    for (const key in data) {
        if (male && female) {
            if (data[key].gender.includes("Male") && data[key].gender.includes("Female")) {
                filteredData[key] = data[key];
            }
        } else if (male) {
            if (data[key].gender.includes("Male")) {
                filteredData[key] = data[key];
            }
        } else if (female) {
            if (data[key].gender.includes("Female")) {
                filteredData[key] = data[key];
            }
        }
    }
    return filteredData;
};


const stockSlice = createSlice({
    name:"stock",
    initialState:{
        male:false,
        female:false,
        items:data
    },
    reducers:{
        ToggleGender : (state, action) => {
            id = action.payload.id;
            checked = action.payload.checked;

            if(id=="male"){
                state.male=checked;
            }
            else {
                state.female=checked;
            }

            if(state.male || state.female){
                state.items = filter(data, state.male, state.female);
            }
            else {
                state.items=data;
            }
        }
    }

});

export const { ToggleGender } = stockSlice.actions;
export default stockSlice.reducer;