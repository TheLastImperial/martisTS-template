import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/store/authSlice";
import { uiSlice } from '../Layout/store';
import { useDispatch, useSelector } from "react-redux";
import { uiSlice as uiSlice2} from '../ui/store'
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    ui2: uiSlice2.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
