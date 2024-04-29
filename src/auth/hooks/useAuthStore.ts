import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store";
import { IStartLoginProps, IUser, IErrorResponse } from "../interfaces";
import Api from "../../api/Api";
import { AppDispatch, RootState } from "../../store/store";
import { jwtDecode } from "jwt-decode";
import { AxiosError } from "axios";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAuthStore = () => {
  // Atributtes
  const dispatch = useAppDispatch();
  const { status, msg } = useAppSelector((state) => state.auth);

  // Methods
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
      const { data } = await Api.get('auth/renew');
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
    startLogin,
    startCheckingAuth,
    startCheckingRememberUser,
    startLogout
  };
};
