import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";

export const store = configureStore({
  reducer: {
    sessionState: AuthReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch