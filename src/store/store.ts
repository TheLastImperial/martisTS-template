import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from '../ui/store'
import { patientsSlice } from "src/patients/store/patientsSlice";
import { prescriptionSlice } from "src/prescriptions/store";
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    patients: patientsSlice.reducer,
    prescriptions: prescriptionSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
