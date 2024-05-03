import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.saga";

const initialState = {
  authenticated: false,
  user: null,
  isLoading: false,
};

export const authSlice = "auth"

export const auth = createSlice({
  name: authSlice,
  initialState,
  reducers: {
    authenticateUser: (state, { payload }) => {
      state.authenticated = true;
      state.user = payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.authenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) =>  {
    builder.addCase(login.type, 
       (state) => {
        state.isLoading = true
      }
    )
  }
});

export const { logout, authenticateUser } = auth.actions;
export const selectAuthenticated = (state: RootState) => !!state.auth.user;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
