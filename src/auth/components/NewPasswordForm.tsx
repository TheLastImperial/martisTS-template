import {
  Button, Grid,
  InputLabel, OutlinedInput,
  Stack
} from "@mui/material";
import { AnimateButton } from "src/components";

export const NewPasswordForm = ()=>{
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack>
            <InputLabel> Nueva contraseña </InputLabel>
            <OutlinedInput
              type="password"
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
  )
}