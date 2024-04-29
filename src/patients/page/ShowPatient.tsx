import { Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { MainCard } from "src/components"
import { UI } from "src/ui"
import { usePatientStore } from "../hooks/usePatientStore"
import { useEffect } from "react"

export const ShowPatient = () =>{
  const { id } = useParams();
  const { currentPatient, startGetPatient } = usePatientStore();

  useEffect(()=>{
    if(id)
      startGetPatient(+id);
  }, [id]);

  return (
    <UI>
      <MainCard>
        <Grid container spacing={1}>
        <Typography variant="caption">
          {
            currentPatient &&
          `${currentPatient.name} ${ currentPatient.fatherLastname } ${ currentPatient.motherLastname }`
          }
        </Typography>
        </Grid>
      </MainCard>
    </UI>
  )
}
