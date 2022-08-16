import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type UserState = {
  users: object[] | null;
};

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      const { id, token } = action.payload.user;
      const foundUser: any = state.users?.find((user: any) => user.id === id);
      if (foundUser) foundUser.token = token;
      state.users?.push(action.payload.user);
    },
  },
});


export const {setUserLogin} = userSlice.actions;
export default userSlice.reducer;
export const UserState = (state: RootState) => state.users;