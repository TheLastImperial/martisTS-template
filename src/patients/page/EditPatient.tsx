import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

import { UI } from "src/ui";
import { MainCard, AnimateButton } from "src/components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { es } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { usePatientStore } from "../hooks/usePatientStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { parse } from "date-fns";
import { IEditPatient } from "../patients";

export const EditPatient = ()=>{
  const navigate = useNavigate();
  const { id='0' } = useParams();
  const {
    startUpdatingPatient,
    startGetPatient,
    currentPatient,
  } = usePatientStore()
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {
      touchedFields,
      errors,
      isSubmitting,
      isValid,
    }
  } = useForm<IEditPatient>();

  const onSubmit: SubmitHandler<IEditPatient> = (data) => {
    if(!isValid)
      return;
    startUpdatingPatient(+id, data);
    // Se deberian usar las opciones del menu...
    navigate("/patients");
  }

  useEffect(()=>{
    if(id){
      startGetPatient(+id);
    }
  }, [id]);

  useEffect(()=>{
    if(currentPatient)
      reset({
        ...currentPatient,
        birthday: parse(
          currentPatient.birthday,
          "yyyy-MM-dd",
          new Date()
        )
      });
  }, [currentPatient]);

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
                <OutlinedInput id="fatherLastName"
                  type="text"
                  {
                    ...register("fatherLastName", {
                      required: "Debe ingresar un apellido."
                    })
                  }
                />
                {
                  touchedFields.fatherLastName &&
                  errors.fatherLastName &&
                  <FormHelperText error >
                    {
                      errors.fatherLastName.message
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
                    ...register("motherLastName", {
                      required: "Debe ingresar un apellido.",
                    })
                  }
                />
                {
                  touchedFields.motherLastName &&
                  errors.motherLastName &&
                  <FormHelperText error >
                    {
                      errors.motherLastName.message
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
