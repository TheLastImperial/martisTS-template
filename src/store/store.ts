import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from '../ui/store'
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
