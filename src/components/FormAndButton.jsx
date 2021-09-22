import * as React from "react";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1ae8dc",
    },
  },
});

const useStyles = makeStyles((theme) => ({
    button: {
        boxShadow: "none !important",
      },
      buttonText: {
        color: "#1f2e58",
        textTransform: "none",
        fontWeight: "bold !important",
      },
}));

export default function FormAndButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
    <ThemeProvider theme={theme}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        className={classes.button}
        onClick={handleClickOpen}
      >
        <Typography
          variant="subtitle2"
          component="span"
          className={classes.buttonText}
        >
          {props.content}
        </Typography>
      </Fab>
    </ThemeProvider>
     <Dialog open={open} onClose={handleClose}>
     <DialogTitle>Subscribe</DialogTitle>
     <DialogContent>
       <DialogContentText>
         To subscribe to this website, please enter your email address here.
         We will send updates occasionally.
       </DialogContentText>
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Email Address"
         type="email"
         fullWidth
         variant="standard"
       />
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose}>Cancel</Button>
       <Button onClick={handleClose}>Subscribe</Button>
     </DialogActions>
   </Dialog>
   </>
  );
}
