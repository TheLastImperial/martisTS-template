import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import { FirebaseSocial } from '.';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthStore } from '../hooks/useAuthStore';
import { IUserLogin } from '../interfaces';
import { AnimateButton } from 'src/components';
import { useUIStore } from 'src/ui/hooks';

export const LoginForm = () => {

  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { msg, startLogin } = useAuthStore();
  const { startSetLoading } = useUIStore();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isSubmitting,
      touchedFields,
    },
  } = useForm<IUserLogin>({
      defaultValues: {
        email: "correo@correo.com",
        password: "123456",
      }
    });

  // Methods
  const onSubmit: SubmitHandler<IUserLogin> = (data)=>{
    if(!isValid)
      return;
    startSetLoading(true);
    startLogin({user: data, rememberUser: checked});
    startSetLoading(false);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput id="email-login"
              type="email"
              placeholder="Enter email address"
              fullWidth
              error={Boolean(false)}
              { ...register('email', {
                required: 'You most set a email format.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email',
                },
              }) }/>
              {
                touchedFields.email &&
                errors.email &&
                <FormHelperText error
                  id="standard-weight-helper-text-email-login">
                    {
                      errors.email.message
                    }
                </FormHelperText>
              }
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(false)}
              id="password-login"
              type={ showPassword ? 'text' : 'password' }
              {...register('password', {
                required: 'Please set a password.'
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    onMouseDown={(event) => {
                      event.preventDefault();
                    }}
                    edge="end"
                    size="large"
                  >
                  {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
            {
              touchedFields.password && errors.password &&
              <FormHelperText
                error
                id="standard-weight-helper-text-password-login">
                { errors.password.message }
              </FormHelperText>
            }
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Keep me sign in</Typography>}
            />
            <Link variant="h6"
              component={RouterLink}
              to="/auth/recovery"
              color="text.primary">
              Forgot Password?
            </Link>
          </Stack>
        </Grid>
        { msg &&
          <Grid item xs={12}>
            <FormHelperText error>{ msg }</FormHelperText>
          </Grid>
        }
        <Grid item xs={12}>
          <AnimateButton>
            <Button disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary">
              Login
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Divider>
            <Typography variant="caption"> Login with</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <FirebaseSocial />
        </Grid>
      </Grid>
    </form>
  );
};
