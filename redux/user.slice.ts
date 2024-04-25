import { UserType } from "@/schema/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  user: UserType | null;
};

const initialState: InitialState = {
  user: null,
  loading: false,
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
    },
  },
});

export const { loadUser, loadUserSuccess, loadUserError } = userSlice.actions;
