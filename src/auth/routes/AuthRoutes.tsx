import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Login } from "../pages/Login"
import { ReactNode, useMemo } from "react"

export const AuthRoutes = (): ReactNode =>{
  const { pathname } = useLocation();
  const basepath = useMemo(() => {
    let aux = pathname.split('/');
    aux = aux.filter(a => a!== '');
    if(aux.length > 1)
      aux.pop();
    let a1 = `/${aux.join('/')}`;
    return a1;
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="login" element={ <Login/> }/>
        <Route path="/*" element={ <Navigate to={ `${basepath}/login` }/> }/>
      </Routes>
    </>
  );
};
