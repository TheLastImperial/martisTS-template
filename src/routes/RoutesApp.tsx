import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthStore } from "../auth/hooks/useAuthStore";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useEffect } from "react";
import SamplePage from "../pages/SamplePage";

export const RoutesApp = ()=>{
  const { status,
    startCheckingAuth,
    startCheckingRememberUser
  } = useAuthStore();

  useEffect(()=>{
    startCheckingAuth();
  }, []);
  useEffect(() => {
    const handleTabClosing = ()=>{
      startCheckingRememberUser();
    }
    window.addEventListener('unload', handleTabClosing)
    return () => {
      window.removeEventListener('unload', handleTabClosing)
    }
  });
  if (status === 'checking') return <h1>Cargando</h1>;
  return (<>
    <Routes>
      {
        status === 'not-authenticated' ?
        (
          <>
            <Route path="/auth/*" element={ <AuthRoutes/> }/>
            <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
          </>
        ) : (
          <>
            <Route path="/" element={ <SamplePage/> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/>
          </>
        )
      }
    </Routes>
  </>)
}