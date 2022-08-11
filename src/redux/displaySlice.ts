import { createSlice } from "@reduxjs/toolkit";
import {RootState} from './store'



const displaySlice = createSlice({
    name:'display',
    initialState: { onDisplay: 'false'},
    reducers: {
        setDisplay:(state, action) => {
            state.onDisplay = action.payload.onDisplay;
        }
    }
})


export const DisplayState = (state: RootState) => state.display.onDisplay;
export const {setDisplay} = displaySlice.actions;
export default displaySlice.reducer;