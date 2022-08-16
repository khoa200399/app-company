import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query/react'

import displayReducer from "./displaySlice";
import authReducer from "./authSlice"
import { authApi } from "./authApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        display: displayReducer,
        auth: authReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(authApi.middleware);
    },
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);