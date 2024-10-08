import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack
} from "@mui/material";

import { UI } from "src/ui";
import { MainCard, AnimateButton } from "src/components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { es } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { usePatientStore } from "../hooks/usePatientStore";
import { useNavigate } from "react-router-dom";

interface INewPatient {
  name: string
  fatherLastname: string
  motherLastname: string
  birthday: Date
};
export const NewPatient = ()=>{
  const navigate = useNavigate();
  const { startSavingPatient } = usePatientStore()
  const {
    register,
    handleSubmit,
    control,
    formState: {
      touchedFields,
      errors,
      isSubmitting,
      isValid,
    }
  } = useForm<INewPatient>();

  const onSubmit: SubmitHandler<INewPatient> = (data) => {
    if(!isValid)
      return;
    startSavingPatient(data);
    // Se deberian usar las opciones del menu...
    navigate("/patients");
  }

  return (
  <>
    <UI>
      <MainCard>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={ 1 }>
            <Grid item xs={ 4 }>
              <Stack spacing={ 1 }>
                <InputLabel> Nombre </InputLabel>
                <OutlinedInput id="name"
                  type="text"
                  {
                    ...register("name", {
                      required: "Por favor ingrese un nombre"
                    })
                  }
                />
              {
                touchedFields.name &&
                errors.name &&
                <FormHelperText error >
                  {
                    errors.name.message
                  }
                </FormHelperText>
              }
              </Stack>
            </Grid>
            <Grid item xs={ 4 }>
              <Stack spacing={ 1 }>
                <InputLabel> Apellido paterno </InputLabel>
                <OutlinedInput id="fatherLastname"
                  type="text"
                  {
                    ...register("fatherLastname", {
                      required: "Debe ingresar un apellido."
                    })
                  }
                />
                {
                  touchedFields.fatherLastname &&
                  errors.fatherLastname &&
                  <FormHelperText error >
                    {
                      errors.fatherLastname.message
                    }
                  </FormHelperText>
                }
              </Stack>
            </Grid>
            <Grid item xs={ 4 }>
              <Stack spacing={ 1 }>
                <InputLabel> Apellido materno </InputLabel>
                <OutlinedInput id="mother_lastname"
                  type="text"
                  {
                    ...register("motherLastname", {
                      required: "Debe ingresar un apellido.",
                    })
                  }
                />
                {
                  touchedFields.motherLastname &&
                  errors.motherLastname &&
                  <FormHelperText error >
                    {
                      errors.motherLastname.message
                    }
                  </FormHelperText>
                }
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={ 1 }>
                <InputLabel>Fecha de nacimiento</InputLabel>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={ es }>
                  <Controller
                    control={control}
                    name="birthday"
                    defaultValue={ new Date() }
                    render={({ field: { onChange, value, ref  } }) => (
                      <DatePicker
                        value={value}
                        inputRef={ref}
                        onChange={(date) => {
                          console.log(date)
                          onChange(date);
                        }}
                        maxDate={ new Date() }
                      />
                    )}
                  />
                </LocalizationProvider>
                {
                  touchedFields.birthday &&
                  errors.birthday &&
                  <FormHelperText error >
                    {
                      errors.birthday.message
                    }
                  </FormHelperText>
                }
              </Stack>
            </Grid>

          </Grid>

          <Grid container spacing={1}>
            <Grid item >
              <Stack spacing={1} >
                <AnimateButton>
                  <Button
                    disabled={ isSubmitting }
                    type="submit"
                    variant="contained"
                    color="primary">
                      Guardar
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </UI>
  </>
  );
};
