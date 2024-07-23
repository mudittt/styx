import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";


// simply loop through every item and 
// check whether its for male or female or both
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

            // if checked box was of male, then only update the male
            if(id=="male"){
                state.male=checked;
            }
            else {
                state.female=checked;
            }

            // filter data
            if(state.male || state.female){
                state.items = filter(data, state.male, state.female);
            }
            // both false means get back to original list
            else {
                state.items=data;
            }
        }
    }

});

export const { ToggleGender } = stockSlice.actions;
export default stockSlice.reducer;