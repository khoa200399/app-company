import { createSlice } from "@reduxjs/toolkit";
import {RootState} from './store'



const displaySlice = createSlice({
    name:'display',
    initialState: { onDisplay: 'false', currentPage:''},
    reducers: {
        setDisplay:(state, action) => {
            state.onDisplay = action.payload.onDisplay;
        },
        setCurrentPage: (state,action) => {           
            state.currentPage = action.payload.currentPage;
        }
    }
})


export const DisplayState = (state: RootState) => state.display;
export const {setDisplay, setCurrentPage} = displaySlice.actions;
export default displaySlice.reducer;