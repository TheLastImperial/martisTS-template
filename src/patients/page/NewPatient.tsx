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
import { INewPatient } from "../patients";


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
            <Grid item >
              <Stack spacing={ 1 }>
                <InputLabel>Telefono</InputLabel>
                <OutlinedInput id="phone" type="text"
                  {
                    ...register("phones.0.number", {
                      required: "Ingrese un numero de telefono"
                    })
                  }
                />
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={ 1 }>
              <Grid item>
                  <Stack spacing={1}>
                    <InputLabel>Ciudad</InputLabel>
                    <OutlinedInput id="city" type="text"
                      {
                        ...register("address.city", {
                          required: "Por favor ingresa el nombre de la ciudad"
                        })
                      }
                    />
                    {
                      touchedFields.address?.city && errors.address?.city &&
                      <FormHelperText>
                        {
                          errors.address.city.message
                        }
                      </FormHelperText>
                    }
                  </Stack>
              </Grid>

              <Grid item xs={ 4 }>
                <Stack spacing = { 1 }>
                  <InputLabel>Calle</InputLabel>
                  <OutlinedInput id="street" type="text"
                    {
                      ...register("address.street", {
                        required: "Por favor ingresa el nombre de la calle"
                      })
                    }
                  />
                  {
                    touchedFields.address?.street && errors.address?.street &&
                    <FormHelperText>
                      {
                        errors.address.street.message
                      }
                    </FormHelperText>
                  }
                </Stack>
              </Grid>

              <Grid item xs={ 4 }>
                <Stack spacing={ 1 }>
                  <InputLabel> Codigo Postal </InputLabel>
                  <OutlinedInput
                    id="zip" type="text"
                    {
                      ...register("address.zip", {
                        required: "Por favor ingresa un codigo postal"
                      })
                    }
                  />
                  {
                    touchedFields.address?.zip && errors.address?.zip &&
                    <FormHelperText>
                      {
                        errors.address.zip.message
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
