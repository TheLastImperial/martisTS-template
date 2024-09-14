import { useState } from "react";

import { UI } from "src/ui";
import {
  ConfirmDialog, MainCard,
  TableComponent
} from "src/components";

import { usePatientStore } from "../hooks/usePatientStore";

export const Patients = () => {
  const [ open, setOpen ] = useState(false);
  const [ idDelete, setIdDelete ] = useState("");
  const {
    patients, count,
    startGetPatients,
    startDeletingPatient,
  } = usePatientStore();
  const header = [
    {
      id: 'name',
      label: 'Nombre',
    },
    {
      id: 'fatherLastName',
      label: 'Apellido paterno',
    },
    {
      id: 'motherLastName',
      label: 'Apellido materno',
    },
  ];

  const handleDelete = (id: string)=>{
    setIdDelete(id);
    setOpen(true);
  };

  const handleOnConfirm = () => {
    startDeletingPatient(idDelete);
    startGetPatients();
    setIdDelete("");
  };

  return (
    <UI>
      <MainCard>
        <TableComponent
          getData = { startGetPatients }
          count = {count}
          data = { patients }
          header = { header }
          baseUrl="/patients"
          handleOnDelete={ handleDelete } />

          <ConfirmDialog
            open={ open }
            title="Eliminar paciente"
            message="¿ Seguro que desea eliminar al paciente ?"
            handleOnCancel = { ()=> setOpen(false) }
            handleOnConfirm={ handleOnConfirm }/>
      </MainCard>
    </UI>
  );
};
