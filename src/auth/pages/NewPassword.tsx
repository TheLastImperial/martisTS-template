import { Grid, Stack, Typography } from "@mui/material";
import { AuthLayout } from "../layout";
import { NewPasswordForm } from "../components";

export const NewPassword = ()=>{
  return (
    <AuthLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">
              Nueva contraseña
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <NewPasswordForm/>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};