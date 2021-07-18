import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface Data {
  value: any
}

const initialState: Data = {
  value: {},
}

export const AuthSlice = createSlice({
  name: "sessionState",
  initialState,
  reducers: {
    customSession: (state,action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {};
    },
  },
});

export const { customSession,logout } = AuthSlice.actions

export default AuthSlice.reducer