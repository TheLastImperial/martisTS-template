import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, IUser } from "../interfaces";

const initialState: IInitialState = {
  user: null,
  status: 'not-authenticated', //authenticated - not-authenticated
  msg: null,
  emailExists: true,
  pwdStrength: {
    color: 'error.main',
    label: 'Muy Debil',
    value: 25
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
    onSetPwdStrength: (state, { payload })=> {
      state.pwdStrength = payload;
    },
  }
});

export const {
  onLogin,
  onLogout,
  onSetEmailExists,
  onSetPwdStrength,
} = authSlice.actions;
