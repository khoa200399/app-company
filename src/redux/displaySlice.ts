import { createSlice } from "@reduxjs/toolkit";
import {RootState} from './store'


type DisplayState = {
    onDisplay: string | null,
    currentPage: string | null,
    users: object[] | null
}

const initialState: DisplayState = {
    onDisplay: 'false',
    currentPage: '',
    users: []
}

const displaySlice = createSlice({
    name:'display',
    initialState,
    reducers: {
        setDisplay:(state, action) => {
            state.onDisplay = action.payload.onDisplay;
        },
        setCurrentPage: (state,action) => {           
            state.currentPage = action.payload.currentPage;
        },
    }
})


export const DisplayState = (state: RootState) => state.display;
export const {setDisplay, setCurrentPage} = displaySlice.actions;
export default displaySlice.reducer;