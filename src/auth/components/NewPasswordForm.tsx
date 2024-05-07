import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import {
  Button, FormControl, FormHelperText, Grid,
  IconButton,
  InputAdornment,
  InputLabel, OutlinedInput,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimateButton } from "src/components";
import { PasswordStrength } from "./PasswordStrength";
import { useAuthStore } from "../hooks";
import { INewPassword } from "../interfaces";
import { useNavigate, useParams } from "react-router-dom";

export const NewPasswordForm = ()=> {
  const navigate = useNavigate();
  const { token = '' } = useParams();
  const { pwdStrength, startNewPassword } = useAuthStore();
  const [showPassword, setShowPassword ] = useState(false);
  const {
    formState: {
      touchedFields,
      errors,
    },
    register,
    watch,
    handleSubmit,
  } = useForm<INewPassword>();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const onSubmit = ( data: INewPassword ) => {
    startNewPassword(data, token);
    navigate('/auth/login');
  };

  useEffect(()=>{
    if(token === '') {
      navigate('/auth/login');
    }
    console.log(token)
  }, []);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel >
              Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              error={
                Boolean(touchedFields.password && errors.password)
              }
              type={ showPassword ? 'text' : 'password' }
              { ...register("password", {
                required: "Ingrese una contraseña.",
                validate: () => {
                  if(pwdStrength.value < 75){
                    return 'Por favor, ingresa una contraseña mas fuerte.';
                  }
                },
              }) }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="******"
            />
            {
              touchedFields.password && errors.password &&
              <FormHelperText error>
                { errors.password.message }
              </FormHelperText>
            }
          </Stack>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <PasswordStrength password= { watch('password') } />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel >
              Confirma contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              type={ 'password' }
              error={
                Boolean(
                  touchedFields.passwordConfirmation &&
                  errors.passwordConfirmation
                )
              }
              {
                ...register("passwordConfirmation", {
                  required: "Ingrese una contraseña.",
                  validate: (val: string)=>{
                    if(watch('password') != val){
                      return 'Las contraseñas no coinciden.'
                    }
                  }
                })
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    size="large"
                  >
                    <EyeInvisibleOutlined />
                  </IconButton>
                </InputAdornment>
              }
              placeholder="******"
            />
            {
              touchedFields.passwordConfirmation &&
              errors.passwordConfirmation &&
              <FormHelperText error>
                { errors.passwordConfirmation.message }
              </FormHelperText>
            }
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <AnimateButton>
            <Button disableElevation
              disabled={false}
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
  )
}
