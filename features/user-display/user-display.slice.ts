import { RootState } from "@/redux/store";
import { UserType } from "@/schema/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  user: UserType | null;
  error: boolean;
};

const initialState: InitialState = {
  user: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, { payload }: { payload: UserType }) => {
      state.loading = false;
      state.user = payload;
    },
    loadUserError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { loadUser, loadUserSuccess, loadUserError } = userSlice.actions;

export const getUserAuthenticated = (state: RootState) => state.auth.authenticated;