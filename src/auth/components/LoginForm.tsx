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
  Typography
} from '@mui/material';

import { AnimateButton, FirebaseSocial } from '.';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export const LoginForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <form noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput id="email-login" type="email" name="email" placeholder="Enter email address" fullWidth error={Boolean(false)} />
            <FormHelperText error id="standard-weight-helper-text-email-login">
              Error
            </FormHelperText>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(false)}
              id="-password-login"
              type={'password'}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      console.log('Hola');
                    }}
                    onMouseDown={() => {
                      console.log('Hola');
                    }}
                    edge="end"
                    size="large"
                  >
                    {checked ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
            <FormHelperText error id="standard-weight-helper-text-password-login">
              Password
            </FormHelperText>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
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
            <Link variant="h6" component={RouterLink} to="" color="text.primary">
              Forgot Password?
            </Link>
          </Stack>
        </Grid>
        {checked && (
          <Grid item xs={12}>
            <FormHelperText error>Error</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <AnimateButton>
            <Button disableElevation disabled={checked} fullWidth size="large" type="submit" variant="contained" color="primary">
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
