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
import NumberFormat from 'react-number-format';

import Backdrop from "@mui/material/Backdrop";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

import { awsMail, awsHarmonyRoistat } from "../utils/requests";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    width: 240,
  },
  mobileDialogContent: {
    paddingTop: "40%",
  },
}));

export default function FormAndButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [backdrop, updateBackdrop] = React.useState(false);
  const [successSnack, updateSuccessSnack] = React.useState(false);
  const [errorSnack, updateErrorSnack] = React.useState(false);
  const [errorSnackMessage, updateErrorSnackMessage] = React.useState("Произошла ошибка. Попробуйте снова.");

  const [isSending, setIsSending] = React.useState(false);



  const theme1 = useTheme();
  const fullScreenSM = useMediaQuery(theme1.breakpoints.down("sm"));

  const [data, setData] = React.useState({
    name: "",
    phone: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function onSendBtnClicked() {
    if (data.name?.length < 2 || data.phone?.length < 12) {
      updateErrorSnackMessage("Необходимо заполнить оба поля.")
      updateErrorSnack(true);
      updateSuccessSnack(false);
      return;
    };
    updateBackdrop(true);
    setIsSending(true);
    const text = props.data.text + `\nИмя: ${data.name}\nТелефон: ${data.phone}`;
    try {
      const mailRes = await awsMail({
        ...props.data,
        text: text
      })
      const roistatRes = await awsHarmonyRoistat({
        phone: data.phone,
        name: data.name,
      })

      if (roistatRes.status === 200 && mailRes.status === 200) {
        updateSuccessSnack(true);
        updateErrorSnack(false);
        updateErrorSnackMessage("Произошла ошибка. Попробуйте снова.")
        handleClose();
        setTimeout(() => setIsSending(false), 500)
      } else {
        // сообщение об ошибке при отправке
        updateErrorSnackMessage("Произошла ошибка. Попробуйте снова.")
        updateErrorSnack(true);
        updateSuccessSnack(false);
        setTimeout(() => setIsSending(false), 500)
      }
      updateBackdrop(false);
    } catch (e) {
      console.log(e);
      // сообщение об ошибке при отправке
      updateErrorSnack(true);
      updateErrorSnackMessage("Произошла ошибка. Попробуйте снова.")
      updateSuccessSnack(false);
      setTimeout(() => setIsSending(false), 500)
      updateBackdrop(false);
    }
  }

  return (
    <>
      <Backdrop open={backdrop} onClick={() => { }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={successSnack}
        autoHideDuration={6000}
        onClose={() => {
          updateSuccessSnack(false);
        }}
      >
        <Alert
          onClose={() => {
            updateSuccessSnack(false);
          }}
          severity="success"
          sx={{ width: "100%" }}
        >
          Данные отправлены!
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorSnack}
        autoHideDuration={6000}
        onClose={() => {
          updateErrorSnack(false);
        }}
      >
        <Alert
          onClose={() => {
            updateErrorSnack(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorSnackMessage}
        </Alert>
      </Snackbar>
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
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreenSM ? true : false}
      >
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
          className={
            fullScreenSM ? classes.mobileDialogContent : classes.dialogContent
          }
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
                type="text"
                className={
                  fullScreenSM ? classes.mobileTextfield : classes.textfield
                }
                color="secondary"
                onChange={(event) => {
                  setData((prevData) => {
                    prevData.name = event.target.value;
                    return prevData;
                  });
                }}
              />
            </Grid>
            <Grid item>
              <NumberFormat
                id="outlined-basic"
                className={
                  fullScreenSM ? classes.mobileTextfield : classes.textfield
                }
                type="tel"
                color='secondary'
                format="+7 (###) ### ## ##"
                size="small"
                allowEmptyFormatting
                mask="_"
                customInput={TextField}
                variant="standard"
                label="Номер телефона"
                onValueChange={values => {
                  setData((prevData) => {
                    prevData.phone = "+7" + new String(values.floatValue);
                    return prevData;
                  })
                }
                }
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
                disabled={isSending}
                onClick={() => {
                  onSendBtnClicked();
                }}
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
