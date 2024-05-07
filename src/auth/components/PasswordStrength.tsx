import {
  Grid, LinearProgress,
  Typography
} from "@mui/material";
import { useEffect } from "react";
import { PasswordStrengthOpts } from "../constants";
import { passwordStrength } from "check-password-strength";
import { useAuthStore } from "../hooks";

interface PasswordStrengthProps {
  password: string;
};

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const {
    pwdStrength, startSetPwdStrength,
    startResetPwdStrength,
  } = useAuthStore();

  const changePassword = (pwd: string)=> {
    const pwdStr = passwordStrength(pwd, PasswordStrengthOpts);

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

    startSetPwdStrength({
      label: pwdStr.value,
      value: pwdStr.id * 25,
      color,
    });
  };

  useEffect(()=>{
    changePassword( password );
  }, [ password ]);

  useEffect(()=>{
    startResetPwdStrength();
  }, []);

  return (
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
  )
};
