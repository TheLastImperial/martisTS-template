import { Button, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { MainCard } from "src/components"
import { UI } from "src/ui"
import { usePatientStore } from "../hooks/usePatientStore"
import { useEffect, useState } from "react"
import { PrescriptionForm, Prescriptions } from "src/prescriptions/components"

export const ShowPatient = () =>{
  const [
    showNewPrescription,
    setShowNewPrescription
  ] = useState(false);

  const { id="" } = useParams();
  const { currentPatient, startGetPatient } = usePatientStore();

  useEffect(()=>{
    startGetPatient(+id);
  }, [id]);

  return (
    <UI>
      <MainCard>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="caption">
              {
                currentPatient &&
              `${currentPatient.name} ${ currentPatient.fatherLastname } ${ currentPatient.motherLastname }`
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              color="primary"
              variant="contained"
              size="small"
              onClick={ ()=>{
                setShowNewPrescription(!showNewPrescription);
              }}>
              {
                showNewPrescription ? "Cancelar" : "Crear"
              }
            </Button>
            {
              showNewPrescription &&
              <PrescriptionForm patientId={+id}/>
            }
          </Grid>
          <Grid item xs={12}>
            <Prescriptions patientId={id}/>
          </Grid>
        </Grid>
      </MainCard>
    </UI>
  )
}
