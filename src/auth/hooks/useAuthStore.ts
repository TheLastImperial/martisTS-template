import { useDispatch, useSelector } from "react-redux";

import Api from "../../api/Api";

import { jwtDecode } from "jwt-decode";
import { AxiosError } from "axios";

import {
  onLogin, onLogout, onSetEmailExists, onSetPwdStrength,
} from "../store";
import {
  IStartLoginProps, IUser, IErrorResponse,
  INewUser, IEmail, IPasswordStrength,
  INewPassword,
} from "../interfaces";
import { AppDispatch, RootState } from "../../store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAuthStore = () => {
  // Atributtes
  const dispatch = useAppDispatch();
  const {
    status, msg, emailExists,
    pwdStrength,
    user,
  } = useAppSelector((state) => state.auth);

  const startRecoveryPassword = async (email: IEmail) => {
    try {
      await Api.post('/auth/recovery-password', email);
    } catch(error){
      console.log(error)
    }
  };

  const startNewPassword = async (newPassword: INewPassword, token:string) => {
    try {
      await Api.post("/auth/new-password", {
        ...newPassword,
        token,
      });
    }catch(error) {
      console.log(error)
    }
  };

  const startCheckEmailExists = async (email: string) =>{
    try {
      const { data } = await Api.post( '/auth/email-exists', { email } );
      dispatch(onSetEmailExists(data.exists));
    } catch(error) {
      console.log(error);
      dispatch(onSetEmailExists(true));
    }
  }
  // Methods
  const startRegister = async (user: INewUser) => {
    try{
      const { data } = await Api.post('/auth/register', user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('rememberUser', 'yes');
      dispatch(
        onLogin({
          name: user.name,
          email: user.email,
          uid: '',
        })
      );
      console.log(data);
    }catch(error){
      // @ts-ignore
      const { response: { data: { message = [] }} } = error;
      dispatch(onLogout(''));
    }
  }

  const startLogin = async({ user, rememberUser }: IStartLoginProps)=>{
    try {
      const { data } = await Api.post('/auth/login', user);
      localStorage.setItem('token', data.token);
      if(rememberUser)
        localStorage.setItem('rememberUser', 'yes');

      const userData = JSON.parse(atob(data.token.split('.')[1]))
      console.log(userData);
      dispatch(
        onLogin({
          name: userData.name,
          email: userData.email,
          uid: data.uid,
        })
      );
    }catch(e){
      const error = e as AxiosError<IErrorResponse>;
      const errorResponse = error.response?.data;
      dispatch(onLogout(errorResponse?.msg));
    }
  };

  const startCheckingAuth = async ()=>{
    const token = localStorage.getItem('token') || '';
    if(token === ''){
      dispatch(onLogout(null));
      return;
    }
    try{
      const { data } = await Api.get('auth/check-status');
      localStorage.setItem('token', data.token);
      const user = jwtDecode<IUser>(token);
      dispatch(onLogin(user));
    }catch(error){
      localStorage.clear();
      dispatch( onLogout(null) );
    }
  };

  const startCheckingRememberUser = ()=>{
    const rememberUser = localStorage.getItem('rememberUser') || false;
    if(!rememberUser){
      localStorage.clear();
    }
  };

  const startLogout= ()=> {
    dispatch(onLogout(null));
    localStorage.clear();
  };
  const startSetPwdStrength = (pwdStrength: IPasswordStrength)=>{
    dispatch(onSetPwdStrength(pwdStrength))
  }

  const startResetPwdStrength = () => {
    dispatch(onSetPwdStrength({
      color: 'error.main',
      label: 'Muy Debil',
      value: 25
    }));
  }

  return {
    user,
    status,
    msg,
    emailExists,
    pwdStrength,
    startLogin,
    startCheckingAuth,
    startCheckingRememberUser,
    startLogout,
    startRegister,
    startCheckEmailExists,
    startRecoveryPassword,
    startSetPwdStrength,
    startResetPwdStrength,
    startNewPassword,
  };
};
