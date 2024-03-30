import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, IUser } from "../interfaces";

const initialState: IInitialState = {
  user: null,
  status: 'not-authenticated', //authenticated - not-authenticated
  msg: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: ( state)=>{
      state.status = 'checking';
    },
    onLogin: (state, { payload }: { payload: IUser })=>{
      state.user = payload;
      state.status = 'authenticated';
    },
    onLogout: (state, { payload })=>{
      state.user = null;
      state.status = 'not-authenticated';
      state.msg = payload;
    }
  }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
