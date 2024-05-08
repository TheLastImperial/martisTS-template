import {
  Button,
  Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Grid,
} from "@mui/material";

interface IConfirmDialogProps {
  title: string;
  message: string;
  open: boolean;
  handleOnConfirm: () => void
  handleOnCancel: () => void
};

export const ConfirmDialog = ({
  title, message, open,
  handleOnConfirm,
  handleOnCancel
}: IConfirmDialogProps) => {
  return (
    <Dialog open = { open }>
      <DialogTitle >
         { title }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          { message }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container
          justifyContent={"center"}
          spacing={ 2 }>
            <Button
              sx={{ mr: 1 }}
              variant="contained"
              onClick={ handleOnConfirm } >
              Confirmar
            </Button>
            <Button
              sx={{ ml: 1 }}
              color="error"
              variant="contained"
              onClick={ handleOnCancel } >
              Cancelar
            </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}