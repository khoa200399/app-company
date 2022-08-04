import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
    name:'display',
    initialState: { onDisplay: 'false'},
    reducers: {
        setDisplay:(state, action) => {
            state.onDisplay = action.payload.onDisplay;
        }
    }
})

export const {setDisplay} = displaySlice.actions;
export default displaySlice.reducer;