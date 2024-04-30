import {
  Button,
  Grid,
  InputLabel,
  Stack,
  TextareaAutosize
} from "@mui/material";
import { useForm } from "react-hook-form";
import { usePrescriptionStore } from "../hook";

interface INewPrescription {
  description: string
}

export const PrescriptionForm = ({ patientId }) =>{
  const { startSavingPrescriptions } = usePrescriptionStore();

  const { register, handleSubmit } = useForm<INewPrescription>();

  const onSubmit = (data)=>{
    startSavingPrescriptions({
      ...data,
      patientId,
    });
  }
  return (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel> Descripcion </InputLabel>
            <TextareaAutosize minRows={8} style={{ width: '100%'}}
              {...register("description")}/>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              >
              Guardar
            </Button>
          </Stack>
        </Grid>
      </form>
    </Grid>
  );
}