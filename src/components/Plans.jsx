import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import FormAndButton from "./FormAndButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import s1f1a2584 from "../images/plans/1-section/1-floor/section-1-floor-1-1r-25,84.png";
import s1f1a3521 from "../images/plans/1-section/1-floor/section-1-floor-1-1r-35,21.png";
import s1f1a3536 from "../images/plans/1-section/1-floor/section-1-floor-1-1r-35,36.png";
import s1f1a3541 from "../images/plans/1-section/1-floor/section-1-floor-1-1r-35,41.png";
import s1f1a3787 from "../images/plans/1-section/1-floor/section-1-floor-1-1r-37,87.png";
import s1f1a4447 from "../images/plans/1-section/1-floor/section-1-floor-1-2r-44,47.png";
import s1f1a4912 from "../images/plans/1-section/1-floor/section-1-floor-1-2r-49,12.png";
import s1f1a5001 from "../images/plans/1-section/1-floor/section-1-floor-1-2r-50,01.png";
import s1f1a5178 from "../images/plans/1-section/1-floor/section-1-floor-1-2r-51,78.png";
import s1f25a3521 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-35,21.png";
import s1f25a3536 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-35,36.png";
import s1f25a3541 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-35,41.png";
import s1f25a3660 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-36,60.png";
import s1f25a3682 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-36,82.png";
import s1f25a4288 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-42,88.png";
import s1f25a4912 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-49,12.png";
import s1f25a5178 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-51,78.png";
import s1f25a5847 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-58,47.png";
import s2f1a1868 from "../images/plans/2-section/1-floor/section-2-floor-1-1r-18,68.png";
import s2f1a3681 from "../images/plans/2-section/1-floor/section-2-floor-1-1r-36,81.png";
import s2f1a3683 from "../images/plans/2-section/1-floor/section-2-floor-1-1r-36,83.png";
import s2f1a4470 from "../images/plans/2-section/1-floor/section-2-floor-1-2r-44,70.png";
import s2f1a4494 from "../images/plans/2-section/1-floor/section-2-floor-1-2r-44,94.png";
import s2f25a3675 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-1r-36,75.png";
import s2f25a3681 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-1r-36,81.png";
import s2f25a3683 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-1r-36,83.png";
import s2f25a5458 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-2r-54,58.png";
import s2f25a5459 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-2r-54,59.png";



const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2e58",
    },
    secondary: {
      main: "#d5aa88",
    },
  },
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1f2e58",
  },
  anchor: {
    position: "absolute",
    marginTop: "-100px",
  },
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingBottom: 100,
    paddingTop: 100,
  },
  content: {
    paddingLeft: 80,
    paddingRight: 50,
  },
  sliderBlock: {
    backgroundColor: "white",
    minHeight: 370,
    borderRadius: "180px 0 0",
    width: "100%",
    marginBottom: "20px !important",
  },
  sliderBlock: {
    backgroundColor: "white",
    minHeight: 370,
    borderRadius: "180px 0 0",
    width: "100%",
    marginBottom: "20px !important",
    position: "relative",
  },
  sliderBlockMD: {
    backgroundColor: "white",
    minHeight: 370,
    width: "100%",
    marginBottom: "10px !important",
    paddingLeft: "0px !important",
    position: "relative",
  },
  title: {
    color: "white",
  },
  chooseApartmentButtons: {
    paddingBottom: 20,
    width: "80%",
    paddingLeft: "0px !important",
    "& button": {
      width: "100%",
      backgroundColor: "white",
      color: "#1f2e58",
      boxShadow: "none !important",
    },
  },
  chooseApartmentButtonsMD: {
    paddingBottom: 20,
    width: "100%",
    paddingLeft: "0px !important",
    "& button": {
      width: "100%",
      backgroundColor: "white",
      color: "#1f2e58",
      boxShadow: "none !important",
    },
  },
  planImageBlock: {
    width: 350,
    height: 350,
    position: "relative",
  },
  planImageBlockLG: {
    width: 300,
    height: 300,
    position: "relative",
  },
  planImageBlockSM: {
    width: 250,
    height: 250,
    position: "relative",
  },
  planImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  planInfo: {
    maxWidth: 400,
    marginTop: "40px !important",
    padding: 30,
    border: "1px solid #1f2e58",
    color: "#1f2e58",
    "& > div": {
      fontSize: 18,
    },
  },
  planInfoLG: {
    maxWidth: 400,
    marginTop: "20px !important",
    marginLeft: "0px !important",
    padding: 25,
    color: "#1f2e58",
    border: "1px solid #1f2e58",
    "& > div": {
      fontSize: 18,
    },
  },
  planInfoSM: {
    maxWidth: 250,
    marginTop: "20px !important",
    color: "#1f2e58",
    "& > div": {
      fontSize: 16,
    },
  },
  apartmentButton: {
    marginTop: "35px !important",
  },
  sliderBottom: {
    backgroundColor: "transparent !important",
    justifyContent: "center !important",
  },
  sliderButton: {
    boxShadow: "none !important",
    backgroundColor: "white !important",
    border: "1px solid #1f2e58 !important",
    marginLeft: "20px !important",
  },
  formButton: {
    transform: "translate(-12px, 0)",
    "& span": {
      color: "white !important",
    },
  },
  mobileContainer: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    paddingTop: 70,
    paddingBottom: 50,
  },
  mobileContent: {
    width: "100%",
    paddingLeft: 50,
    paddingRight: 20,
  },
  mobileAnchor: {
    position: "absolute",
    marginTop: "-55px",
  },
}));

const plans = [
  {
    image: s1f1a2584,
    type: "Студия",
    floor: "1",
    area: "25.84",
    section: "1, 3",
  },
  {
    image: s1f1a3521,
    type: "1-комнатная",
    floor: "1",
    area: "35.21",
    section: "1, 3",
  },
  {
    image: s1f1a3536,
    type: "1-комнатная",
    floor: "1",
    area: "35.36",
    section: "1, 3",
  },
  {
    image: s1f1a3541,
    type: "1-комнатная",
    floor: "1",
    area: "35.41",
    section: "1, 3",
  },
  {
    image: s1f1a3787,
    type: "1-комнатная",
    floor: "1",
    area: "37.87",
    section: "1, 3",
  },
  {
    image: s1f1a4447,
    type: "2-комнатная",
    floor: "1",
    area: "44.47",
    section: "1, 3",
  },
  {
    image: s1f1a4912,
    type: "2-комнатная",
    floor: "1",
    area: "49.12",
    section: "1, 3",
  },
  {
    image: s1f1a5001,
    type: "2-комнатная",
    floor: "1",
    area: "50.01",
    section: "1, 3",
  },
  {
    image: s1f1a5178,
    type: "2-комнатная",
    floor: "1",
    area: "51.78",
    section: "1, 3",
  },
  {
    image: s1f25a3521,
    type: "1-комнатная",
    floor: "2-5",
    area: "35.21",
    section: "1, 3",
  },
  {
    image: s1f25a3536,
    type: "1-комнатная",
    floor: "2-5",
    area: "35.36",
    section: "1, 3",
  },
  {
    image: s1f25a3541,
    type: "1-комнатная",
    floor: "2-5",
    area: "35.41",
    section: "1, 3",
  },
  {
    image: s1f25a3660,
    type: "Студия",
    floor: "2-5",
    area: "36.60",
    section: "1, 3",
  },
  {
    image: s1f25a3682,
    type: "1-комнатная",
    floor: "2-5",
    area: "36.82",
    section: "1, 3",
  },
  {
    image: s1f25a4288,
    type: "2-комнатная",
    floor: "2-5",
    area: "42.88",
    section: "1, 3",
  },
  {
    image: s1f25a4912,
    type: "2-комнатная",
    floor: "2-5",
    area: "49.12",
    section: "1, 3",
  },
  {
    image: s1f25a5178,
    type: "2-комнатная",
    floor: "2-5",
    area: "51.78",
    section: "1, 3",
  },
  {
    image: s1f25a5847,
    type: "2-комнатная",
    floor: "2-5",
    area: "58.47",
    section: "1, 3",
  },
  {
    image: s2f1a1868,
    type: "Студия",
    floor: "1",
    area: "18.68",
    section: "2",
  },
  {
    image: s2f1a3681,
    type: "1-комнатная",
    floor: "1",
    area: "36.81",
    section: "2",
  },
  {
    image: s2f1a3683,
    type: "1-комнатная",
    floor: "1",
    area: "36.83",
    section: "2",
  },
  {
    image: s2f1a4470,
    type: "2-комнатная",
    floor: "1",
    area: "44.70",
    section: "2",
  },
  {
    image: s2f1a4494,
    type: "2-комнатная",
    floor: "1",
    area: "44.94",
    section: "2",
  },
  {
    image: s2f25a3675,
    type: "1-комнатная",
    floor: "2-5",
    area: "36.75",
    section: "2",
  },
  {
    image: s2f25a3681,
    type: "1-комнатная",
    floor: "2-5",
    area: "36.81",
    section: "2",
  },
  {
    image: s2f25a3683,
    type: "1-комнатная",
    floor: "2-5",
    area: "36.83",
    section: "2",
  },
  {
    image: s2f25a5458,
    type: "2-комнатная",
    floor: "2-5",
    area: "54.58",
    section: "2",
  },
  {
    image: s2f25a5459,
    type: "2-комнатная",
    floor: "2-5",
    area: "54.59",
    section: "2",
  },
];

const allFlatTypes = plans
  .map((elem) => elem.type)
  .filter(function (item, pos, array) {
    return array.indexOf(item) == pos;
  });
allFlatTypes.push("Все");

function Plans() {
  const classes = useStyles();
  const theme1 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [backdrop, updateBackdrop] = React.useState(false);
  const [successSnack, updateSuccessSnack] = React.useState(false);
  const [errorSnack, updateErrorSnack] = React.useState(false);  
  const [closeDialog, setCloseDialog] = React.useState(false);  
  const fullScreenLG = useMediaQuery(theme1.breakpoints.down("lg"));
  const fullScreenMD = useMediaQuery(theme1.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme1.breakpoints.down("sm"));
  const [plansArr, updatePlansArr] = React.useState(plans);

  function filterPlans(param) {
    let result = [];
    result = plans.filter((elem) => {
      return elem.type === param || param === "Все";
    });
    setActiveStep(0);
    updatePlansArr(result);
  }

  function forceCloseDialog() {
    setCloseDialog(true);
    setCloseDialog(false);
  }

  function sendFlatRequest(phoneAndName) {
    let data = {...phoneAndName};
    data.section = plansArr[activeStep].section;
    data.floor = plansArr[activeStep].floor;
    data.area = plansArr[activeStep].area;


    updateBackdrop(true);
    fetch("https://92.53.96.221/myata/public_html/submit/submit-harmony.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      //console.log("Request complete! response:", res);
      if (res.status === 200) {
        // закрытие диалога
        // очистка полей

        // сообщение об успешной отправке
        updateSuccessSnack(true);
        updateErrorSnack(false);
        forceCloseDialog();
        // setTimeout(() => {
        //   eval(
        //     `
        //           ym(71943988,'reachGoal','SEND');
        //           gtag('event','target',{'event_category':'FORM','event_action':'SEND',});
        //           fbq('track', 'Lead');
                
        //           `
        //   );
        // }, 2000);
      } else {
        // сообщение об ошибке при отправке
        updateErrorSnack(true);
        updateSuccessSnack(false);
      }
      updateBackdrop(false);
    }).catch((e) => console.log(e));
  }
  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={backdrop} onClick={() => {}}>
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
          Произошла ошибка. Попробуйте снова.
        </Alert>
      </Snackbar>
      <div
        id="plans"
        className={fullScreenMD ? classes.mobileAnchor : classes.anchor}
      ></div>

      <Container
        className={fullScreenMD ? classes.mobileContainer : classes.container}
      >
        <Grid
          container
          direction="column"
          alignItems={fullScreenMD ? "center" : "flex-end"}
          className={fullScreenSM ? classes.mobileContent : classes.content}
          spacing={4}
        >
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              className={classes.title}
              align={fullScreenMD ? "center" : "left"}
            >
              ПЛАНИРОВКИ
            </Typography>
          </Grid>

          <Grid
            item
            className={
              fullScreenMD
                ? classes.chooseApartmentButtonsMD
                : classes.chooseApartmentButtons
            }
          >
            <Stack direction={fullScreenSM ? "column" : "row"} spacing={2}>
              {allFlatTypes.map((type) => (
                <Fab
                  variant="extended"
                  size="medium"
                  color="common"
                  //aria-label="all"
                  onClick={() => {
                    filterPlans(type);
                  }}
                >
                  {type}
                </Fab>
              ))}
            </Stack>
          </Grid>

          <Grid
            item
            className={
              fullScreenMD ? classes.sliderBlockMD : classes.sliderBlock
            }
          >
            <Box
              sx={{
                maxWidth: 900,
                flexGrow: 1,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "justify",
              }}
            >
              <Box
                sx={{
                  minHeight: 220,
                  maxWidth: 850,
                  width: "100%",
                  p: 2,
                  marginTop: 2,
                }}
              >
                <Grid
                  container
                  direction={fullScreenMD ? "column" : "row"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <div
                      className={
                        fullScreenSM
                          ? classes.planImageBlockSM
                          : fullScreenMD
                          ? classes.planImageBlock
                          : fullScreenLG
                          ? classes.planImageBlockLG
                          : classes.planImageBlock
                      }
                    >
                      <img
                        src={plansArr[activeStep]?.image}
                        className={classes.planImage}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          className={
                            fullScreenSM
                              ? classes.planInfoSM
                              : fullScreenLG
                              ? classes.planInfoLG
                              : classes.planInfo
                          }
                        >
                          <Grid item>
                            <Typography
                              align="center"
                              variant={fullScreenSM ? "h6" : "h5"}
                              gutterBottom
                              component="div"
                            >
                              {plansArr[activeStep]?.type}
                            </Typography>
                          </Grid>
                          <br />

                          <Grid item>
                            <Grid
                              container
                              justifyContent="space-between"
                              spacing={
                                fullScreenSM
                                  ? 5
                                  : fullScreenMD
                                  ? 10
                                  : fullScreenLG
                                  ? 4
                                  : 15
                              }
                            >
                              <Grid item>
                                {fullScreenSM ? "Площадь" : "Общая площадь"}
                              </Grid>
                              <Grid item>{plansArr[activeStep]?.area} м²</Grid>
                            </Grid>

                            <Grid container justifyContent="space-between">
                              <Grid item>Секция </Grid>
                              <Grid item>{plansArr[activeStep]?.section}</Grid>
                            </Grid>

                            <Grid container justifyContent="space-between">
                              <Grid item>Этаж</Grid> <Grid item>{plansArr[activeStep]?.floor}</Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.apartmentButton}>
                        <FormAndButton
                          content={
                            fullScreenSM
                              ? "Узнать больше"
                              : "Узнать больше об этой квартире"
                          }
                          color="secondary"
                          onSendBtnClicked={(data) => sendFlatRequest(data)}
                          forceClose={closeDialog}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <ThemeProvider theme={theme}>
                <MobileStepper
                  className={classes.sliderBottom}
                  variant="none" /* Здесь можешь добавить вместо none - dots/progress/text */
                  steps={plansArr.length}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Fab
                      size="medium"
                      aria-label="next"
                      onClick={handleNext}
                      disabled={activeStep === plansArr.length - 1}
                      className={classes.sliderButton}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Fab>
                  }
                  backButton={
                    <Fab
                      size="medium"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      aria-label="back"
                      className={classes.sliderButton}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                    </Fab>
                  }
                />
              </ThemeProvider>
            </Box>
          </Grid>

          <Grid item className={classes.formButton}>
            <FormAndButton
              content={fullScreenSM ? "Консультация" : "Получить консультацию"}
              color="primary"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Plans;
