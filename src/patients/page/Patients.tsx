import { UI } from "src/ui";
import { usePatientStore } from "../hooks/usePatientStore";
import { MainCard, TableComponent } from "src/components";
import { useEffect } from "react";
import { AlertHelper } from "src/helpers/AlertHelper";

export const Patients = () => {
  const { patients, count,
    startGetPatients, startDeletingPatient
  } = usePatientStore();
  const header = [
    {
      id: 'name',
      label: 'Nombre',
    },
    {
      id: 'fatherLastname',
      label: 'Apellido paterno',
    },
    {
      id: 'motherLastname',
      label: 'Apellido materno',
    },
  ];

  useEffect(()=>{
    console.log({
      patients, count
    })
  }, []);

  const handleDelete = (id: string)=>{
    AlertHelper.yesOrNot(
      "Eliminar paciente",
      "¿ Seguro que desea eliminar el paciente ?",
      () => {
        startDeletingPatient(id);
        startGetPatients();
      });
  }
  return (
    <UI>
      <MainCard>
        <TableComponent
          getData = { startGetPatients }
          count = {count}
          data = { patients }
          header = { header }
          baseUrl="/patients"
          handleOnDelete={ handleDelete }/>
      </MainCard>
    </UI>
  );
};
