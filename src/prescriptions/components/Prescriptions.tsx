import { TableComponent } from "src/components"
import { usePrescriptionStore } from "../hook"

interface PrescriptionsProps{
  patientId: string
};

export const Prescriptions = ({ patientId }: PrescriptionsProps )=> {
  const {
    prescriptions,
    count,
    startGettingPrescriptions,
  } = usePrescriptionStore();

  const header = [
    {
      id: "description",
      label: "Descripcion"
    },
  ]
  return (
    <TableComponent
      header={ header }
      data={ prescriptions }
      count={ count }
      getData={ startGettingPrescriptions }
      baseUrl="/prescriptions"
      defaultSearch={ patientId }
      canSearch={ false }
      canEdit={ false }/>
  )
}