import {
  Button, Dialog, DialogActions,
  DialogContent, DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material"

interface IMessageDialogProps {
  title: string;
  message: string;
  open: boolean;
  handleOnClose: () => void;
};

export const MessageDialog = (
  { title, message, open, handleOnClose }: IMessageDialogProps) => {

  return (
    <Dialog open={ open } onClose={ handleOnClose } >
      <DialogTitle>
        { title }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          { message }
        </DialogContentText>
      </DialogContent>
      <DialogActions >
        <Grid
          container
          justifyContent="center">
          <Button
            variant="contained"
            onClick = { handleOnClose }>
            OK
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};
