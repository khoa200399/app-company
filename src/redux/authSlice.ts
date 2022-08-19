import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  users: object[];
  current_user: {
    id?: string;
    email?: string;
    name?: string;
    access_token?: string;
    refresh_token?: string;
    roles?:  string[];
  };
  error: object;
}

const initialState: UserState = {
  users: [],
  current_user: {
    id: "",
    email: "",
    name: "",
    access_token: "",
    refresh_token: "",
    roles: []
  },
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, name, access_token, roles, refresh_token } = action.payload;
      state.current_user.id = id;
      state.current_user.email = email;
      state.current_user.name = name;
      state.current_user.access_token = access_token;
      state.current_user.refresh_token = refresh_token;
      state.current_user.roles = roles ;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.current_user.id = "";
      state.current_user.email = "";
      state.current_user.name = "";
      state.current_user.access_token = "";
      state.current_user.refresh_token = "";
      state.current_user.roles = [];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logout, setError } = authSlice.actions;
export const AuthState = (state: RootState) => state.auth;
