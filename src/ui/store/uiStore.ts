import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from ".";
import { useDispatch, useSelector } from "react-redux";

export const uiStore = configureStore({
  reducer: {
    ui: uiSlice.reducer
  }
});

export type UIState = ReturnType<typeof uiStore.getState>
export type UIDispatch = typeof uiStore.dispatch;

export const useUIDispatch = useDispatch.withTypes<UIDispatch>();
export const useUISelector = useSelector.withTypes<UIState>();
