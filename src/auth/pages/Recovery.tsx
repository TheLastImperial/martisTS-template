import { Grid, Stack, Typography } from "@mui/material"

import { AuthLayout } from "../layout"
import { RecoveryForm } from "../components";

export const Recovery = ()=>{
  return (
    <AuthLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">
              Recuperar cuenta
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <RecoveryForm />
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
