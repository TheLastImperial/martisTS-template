import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

import { useAuthStore } from "../auth/hooks/useAuthStore";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { Patients } from "src/patients/page";
import { PatientRoutes } from "src/patients/routes";
import { useUIStore } from "src/ui/hooks";

import { Loading } from "../components";

export const RoutesApp = ()=>{
  const { status,
    startCheckingAuth,
    startCheckingRememberUser
  } = useAuthStore();
  const {
    loading
  } = useUIStore();

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
            <Route path="/" element = { <Patients/> }/>
            <Route path="/patients/*" element = { <PatientRoutes /> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/>
          </>
        )
      }
    </Routes>
    <Loading open={ loading }/>
  </>)
}
