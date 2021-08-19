import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface Data {
  value: any,
  userOid:any
}

const initialState: Data = {
  value: {},
  userOid: "",
}

export const AuthSlice = createSlice({
  name: "sessionState",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userOid = action.payload;
    },
    customSession: (state,action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {};
    },
  },
});

export const { setUser,customSession,logout } = AuthSlice.actions
export const userId = (state) => state.sessionState.userOid;
export default AuthSlice.reducer