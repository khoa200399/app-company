import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser, setError, logout } from "./authSlice";

import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://testtourapp.herokuapp.com",
  prepareHeaders: (header, api) => {
    const state = api.getState() as RootState;
    const access_token = state.auth.current_user.access_token;
    if (access_token) {
      header.set("authorization", `Bearer ${access_token}`);
    }
    return header;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    api.dispatch(setError(result.error));
  }

  if (result?.error?.status === 403) {
    console.log("Sending Refresh Token");

    //handle call refresh
    let refresh_token = localStorage.getItem("user");
    if (refresh_token) refresh_token = JSON.parse(refresh_token).refresh_token;

    const refreshResult = await baseQuery(
      {
        url: "/users/refresh",
        method: "POST",
        headers: { Authorization: `Bearer ${refresh_token}` },
      },
      api,
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // api.dispatch(setUser({refresh_token: refreshResult.data.refresh_token }))
      // localStorage.setItem('user', {refresh_token:refreshResult.data.refresh_token })
      console.log(user);
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/users/signin",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            setUser({
              id: res.data.result._id,
              name: res.data.result.name,
              email: res.data.result.email,
              access_token: res.data.token,
              refresh_token: res.data.refresh_token,
              roles: ['all','user']
            })
          );
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: res.data.result._id,
              name: res.data.result.name,
              email: res.data.result.email,
              access_token: res.data.token,
              refresh_token: res.data.refresh_token,
              roles: ['all','user','admin']
            })
          );
          console.log("Result Login", res.data);
        } catch (err: any) {
          console.log("Error Login", err.error);
        }
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      }) => {
        return {
          url: "/users/signup",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            setUser({
              name: res.data.result.name,
              email: res.data.result.email,
              id: res.data.result._id,
              access_token: res.data.token,
              refresh_token: res.data.refresh_token,
              role: 'all'
            })
          );
          console.log("Result Login", res.data);
        } catch (err: any) {
          console.log("Error Login", err.error);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
