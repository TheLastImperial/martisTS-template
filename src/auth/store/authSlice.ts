import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, IUser } from "../interfaces";

const initialState: IInitialState = {
  user: null,
  status: 'not-authenticated', //authenticated - not-authenticated
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: ( state)=>{
      state.status = 'cheking';
    },
    onLogin: (state, { payload }: { payload: IUser })=>{
      state.user = payload;
      state.status = 'authenticated';
    },
    onLogout: (state)=>{
      state.user = null;
      state.status = 'not-authenticated';
    }
  }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
