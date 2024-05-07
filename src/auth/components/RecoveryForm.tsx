import {
  Button, Grid,
  InputLabel, OutlinedInput, Stack
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AnimateButton } from "src/components";
import { IEmail } from "../interfaces";
import { useAuthStore } from "../hooks";

export const RecoveryForm = ()=> {
  const { startRecoveryPassword } = useAuthStore();
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
  } = useForm<IEmail>();

  const onSubmit = ( data: IEmail ) => {
    startRecoveryPassword(data);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack>
            <InputLabel> Correo </InputLabel>
            <OutlinedInput
              type="email"
              { ...register('email', {
                required: 'Debes ingresar un correo.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Por favor, ingresa un correo valido.',
                },
              }) }
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AnimateButton>
            <Button disableElevation
              disabled={ isSubmitting }
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Recuperar cuenta
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </form>
  );
};
