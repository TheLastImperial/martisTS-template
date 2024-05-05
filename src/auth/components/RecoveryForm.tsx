import {
  Button, Grid,
  InputLabel, OutlinedInput, Stack
} from "@mui/material";
import { AnimateButton } from "src/components";

export const RecoveryForm = ()=>{
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack>
            <InputLabel> Correo </InputLabel>
            <OutlinedInput
              type="email"
            />
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
  );
};
