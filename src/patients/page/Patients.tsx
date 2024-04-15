import { UI } from "src/ui";
import { usePatientStore } from "../hooks/usePatientStore";
import { MainCard, TableComponent } from "src/components";

export const Patients = () => {
  const { patients, count, startGetPatients } = usePatientStore();
  const header = [
    {
    id: 'title',
    label: 'Titulo',
    },
    {
      id: 'notes',
      label: 'Nota',
    },
  ];

  return (
    <UI>
      <MainCard>
        <TableComponent
          getData = { startGetPatients }
          count = {count}
          data = { patients }
          header = { header }/>
      </MainCard>
    </UI>
  );
};
