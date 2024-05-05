import { useDispatch, useSelector } from "react-redux";

import { jwtDecode } from "jwt-decode";
import { AxiosError } from "axios";

import { onChecking, onLogin, onLogout, onSetEmailExists } from "../store";
import { IStartLoginProps, IUser, IErrorResponse, INewUser } from "../interfaces";
import Api from "../../api/Api";
import { AppDispatch, RootState } from "../../store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAuthStore = () => {
  // Atributtes
  const dispatch = useAppDispatch();
  const { status, msg, emailExists } = useAppSelector((state) => state.auth);

  const startCheckEmailExists = async (email: string) =>{
    try {
      const { data } = await Api.post( '/auth/email-exists', { email } );
      console.log(data.exists);
      dispatch(onSetEmailExists(data.exists));
    } catch(error) {
      console.log(error);
      dispatch(onSetEmailExists(true));
    }
  }
  // Methods
  const startRegister = async (user: INewUser) => {
    dispatch(onChecking());
    try{
      const { data } = await Api.post('/auth/register', user);
      console.log(data);
    }catch(error){
      // @ts-ignore
      const { response: { data: { message = [] }} } = error;
      dispatch(onLogout(''));
    }
  }

  const startLogin = async({ user, rememberUser }: IStartLoginProps)=>{
    dispatch(onChecking());
    console.log(user)
    try {
      const { data } = await Api.post('/auth/login', user);
      localStorage.setItem('token', data.token);
      if(rememberUser)
        localStorage.setItem('rememberUser', 'yes');
      dispatch(
        onLogin({
          name: data.name,
          email: data.email,
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

  return {
    status,
    msg,
    emailExists,
    startLogin,
    startCheckingAuth,
    startCheckingRememberUser,
    startLogout,
    startRegister,
    startCheckEmailExists,
  };
};
