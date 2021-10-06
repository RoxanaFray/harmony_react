import * as React from "react";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Logo from "../images/logo2.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d5aa88",
      contrastText: "#1f2e58",
    },
    secondary: {
      main: "#1f2e58",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  textButton: {
    boxShadow: "none !important",
  },

  buttonText: {
    textTransform: "none",
    fontWeight: "bold !important",
  },
  dialogContent: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    paddingLeft: 60,
  },
  textfield: {
    width: 300,
  },
  sendButton: {
    boxShadow: "none !important",
  },
  sendButtonText: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  mobileTextfield: {
    width: 240
  },
  mobileDialogContent: {
    paddingTop: '40%'
  }
}));

export default function FormAndButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const theme1 = useTheme();
  const fullScreenSM = useMediaQuery(theme1.breakpoints.down("sm"));

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
          color={props.color}
          className={classes.textButton}
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
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreenSM ? true : false}>
        <IconButton
          edge="false"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={1}
          className={fullScreenSM ? classes.mobileDialogContent : classes.dialogContent}
        >
          <Grid item>
            <img src={Logo} width="80" alt="Логотип" />
          </Grid>
          <ThemeProvider theme={theme}>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Имя"
                variant="standard"
                className={fullScreenSM ? classes.mobileTextfield : classes.textfield}
                color="secondary"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Номер телефона"
                variant="standard"
                className={fullScreenSM ? classes.mobileTextfield : classes.textfield}
                color="secondary"
              />
            </Grid>
            <br />
            <br />
            <Grid item>
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.sendButton}
              >
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.sendButtonText}
                >
                  Отправить
                </Typography>
              </Fab>
            </Grid>
          </ThemeProvider>
          {/*     <Grid item>
    <Checkbox {...label} defaultChecked />
    Я принимаю политику в отношении обработки и защиты персональных данных и даю своё согласие на обработку моих персональных данных. 
    </Grid> */}
        </Grid>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}
