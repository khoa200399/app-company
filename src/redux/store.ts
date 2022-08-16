import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./displaySlice";
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        display: displayReducer,
        users: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>