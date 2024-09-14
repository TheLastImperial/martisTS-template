import { ChangeEvent, useState } from "react";

import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import {
  Button,
  FormControl,
  FormHelperText,
  Grid,IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { passwordStrength } from "check-password-strength";

import { AnimateButton } from "src/components";
import { INewUser, IPasswordStrength } from "../interfaces";
import { useAuthStore } from "../hooks/useAuthStore";
import { PasswordStrengthOpts } from "../constants";

// TODO: Validar que un nuevo correo no exista.
export const RegisterForm = ()=>{

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showPasswordConfirm, setShowPasswordConfirm ] = useState(false);
  const [ pwdStrength, setPwdStrength ] = useState<IPasswordStrength>({
    color: 'error.main',
    label: passwordStrength('', PasswordStrengthOpts).value,
    value: passwordStrength('', PasswordStrengthOpts).id * 25,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      touchedFields,
      isSubmitting,

    }
  } = useForm<INewUser>({
    defaultValues: {
      email: 'correo2@correo.com',
      name: 'Nombre',
      password: '123456A,a',
      passwordConfirmation: '123456A,a'
    }
  });

  const { startRegister } = useAuthStore();

  const hangleOnChangePassword = (e: ChangeEvent<HTMLInputElement>)=> {
    const pwdStr = passwordStrength(e.target.value, PasswordStrengthOpts);

    let color = 'error.main';
    switch(pwdStr.id){
      case 2:
        color = 'warning.main';
        break;
      case 3:
        color = 'success.main';
        break;
      case 4:
        color = 'success.dark';
        break;
    }

    setPwdStrength({
      label: pwdStr.value,
      value: pwdStr.id * 25,
      color,
    });
  }
  const handleClickShowPasswordConfirm = ()=> {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: INewUser) =>{
    startRegister(data);
  }

  return (
    <form onSubmit = { handleSubmit(onSubmit) }>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel >Nombre</InputLabel>
            <OutlinedInput
              fullWidth
              type="text"
              placeholder="name"
              autoComplete="off"
              { ...register('name') }
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel >
              Correo electronico
            </InputLabel>
            <OutlinedInput
              fullWidth
              type="email"
              autoComplete="off"
              error={
                Boolean(
                  touchedFields.email && errors.email
                )
              }
              placeholder="correo@example.com"
              {
                ...register("email", {
                  required: "Debe ingresar un correo.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "El correo no tiene un formato valido.",
                  },
                })
              }
              />
              {
                touchedFields.email && errors.email &&
                <FormHelperText error>
                  { errors.email.message }
                </FormHelperText>
              }
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel >
              Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              error = {
                Boolean(touchedFields.password && errors.password)
              }
              type={ showPassword ? 'text' : 'password' }
              { ...register("password", {
                required: "Debe ingresar una contraseña.",
                validate: () => {
                  if(pwdStrength.value < 75){
                    return 'Por favor, ingresa una contraseña mas fuerte.';
                  }
                },
              }) }
              onChange={hangleOnChangePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={ handleClickShowPassword }
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {
                      showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />
                    }
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
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <LinearProgress
                  sx={{ colorPrimary: pwdStrength.color }}
                  variant="determinate"
                  value={ pwdStrength.value }
                  />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" fontSize="0.75rem">
                  { pwdStrength.label }
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel >
              Confirma contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              type={ showPasswordConfirm ? 'text' : 'password' }
              error={
                Boolean(
                  touchedFields.passwordConfirmation &&
                  errors.passwordConfirmation
                )
              }
              {
                ...register("passwordConfirmation", {
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
                    onClick={ handleClickShowPasswordConfirm }
                  >
                    {
                      showPasswordConfirm ?
                      <EyeOutlined /> :
                      <EyeInvisibleOutlined />
                    }
                  </IconButton>
                </InputAdornment>
              }
              placeholder="******"
            />
            {
              touchedFields.passwordConfirmation &&
              errors.passwordConfirmation &&
              <FormHelperText error>
                {
                  errors.passwordConfirmation.message
                }
              </FormHelperText>
            }
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
              Crear cuenta
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </form>
  )
}
