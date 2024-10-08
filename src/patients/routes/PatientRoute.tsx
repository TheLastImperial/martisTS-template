import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { ReactNode, useMemo } from "react"
import { Patients, NewPatient } from "../page";
import { ShowPatient } from "../page/ShowPatient";
import { EditPatient } from "../page/EditPatient";

export const PatientRoutes = (): ReactNode =>{
  const { pathname } = useLocation();
  const basepath = useMemo(() => {
    let aux = pathname.split('/');
    aux = aux.filter(a => a!== '');
    if(aux.length > 1)
      aux.pop();
    let a1 = `/${aux.join('/')}`;
    return a1;
  }, [ pathname ]);

  return (
    <>
      <Routes>
        <Route index element = { <Patients /> } />
        <Route path = "new" element = { <NewPatient /> } />
        <Route path = "edit/:id" element = { <EditPatient /> } />
        <Route path = "/:id" element = { <ShowPatient /> } />
        <Route path = "/*" element = { <Navigate to = { `${basepath}` }/> }/>
      </Routes>
    </>
  );
};
