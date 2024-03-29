import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store";
import { IStartLoginProps, IUser } from "../interfaces";
import Api from "../../api/Api";
import { AppDispatch, RootState } from "../../store/store";
import { jwtDecode } from "jwt-decode";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useAuthStore = () => {
  // Atributtes
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);

  // Methods
  const startLogin = async({ user, rememberUser }: IStartLoginProps)=>{
    dispatch(onChecking());
    try {
      const { data } = await Api.post('/auth', user);
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
      dispatch(onLogout());
    }
  };

  const startCheckingAuth = ()=>{
    const token = localStorage.getItem('token') || '';
    console.log({token});
    if(token === ''){
      console.log('Entro al logout')
      dispatch(onLogout());
      return;
    }
    const user = jwtDecode<IUser>(token);
    dispatch(onLogin(user));
  }

  const startCheckingRememberUser = ()=>{
    const rememberUser = localStorage.getItem('rememberUser') || false;
    if(!rememberUser){
      localStorage.clear();
    }
  }
  const startLogout= ()=> {
    dispatch(onLogout());
    localStorage.clear();
  }
  return {
    status,
    startLogin,
    startCheckingAuth,
    startCheckingRememberUser,
    startLogout
  }
};
