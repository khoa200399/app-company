import { createSlice } from "@reduxjs/toolkit";
import {RootState} from './store'

const initialState = {
    onDisplay: 'false',
    currentPage: 'calendar',
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
        setUserLogin: (state, action) => {
            const {id, token} = action.payload.user;
            const foundUser:any = state.users.find((user:any) => user.id === id );
            if(foundUser) foundUser.token = token;
            state.users.push(action.payload.user)
        }
    }
})


export const DisplayState = (state: RootState) => state.display;
export const {setDisplay, setCurrentPage} = displaySlice.actions;
export default displaySlice.reducer;