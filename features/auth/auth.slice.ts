import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  user: null,
  isLoading: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, { payload }) => {
      state.authenticated = true;
      state.user = payload;
      state.isLoading = false;
    },
    login: (state, { payload }) => {
      state.isLoading = true;
    },
    logout: (state) => {
      state.authenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout, authenticateUser } = auth.actions;
export const selectAuthenticated = (state: RootState) => !!state.auth.user;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
