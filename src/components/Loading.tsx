import { CircularProgress, Dialog, DialogContent } from "@mui/material"

interface LoadingProps {
  open: boolean;
};

export const Loading = ({ open } : LoadingProps) => {
  return (
    <Dialog open = { open } PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none"
        }
      }}>
      <DialogContent >
        <CircularProgress />
      </DialogContent>
    </Dialog>
  )
}