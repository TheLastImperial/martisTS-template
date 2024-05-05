import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, IUser } from "../interfaces";

const initialState: IInitialState = {
  user: null,
  status: 'not-authenticated', //authenticated - not-authenticated
  msg: null,
  emailExists: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: ( state )=>{
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
    },
    onSetEmailExists: ( state, { payload })=>{
      state.emailExists = payload;
    },
  }
});

export const {
  onChecking,
  onLogin,
  onLogout,
  onSetEmailExists,
} = authSlice.actions;
