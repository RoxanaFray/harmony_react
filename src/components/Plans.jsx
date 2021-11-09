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
import Stack from "@mui/material/Stack";
import s1a3521 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-35,21.png";
import s1a3536 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-35,36.png";
import s1a3541 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-35,41.png";
import s1a3660 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-36,60.png";
import s1a3682 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-1r-36,82.png";
import s1a4288 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-42,88.png";
import s1a4912 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-49,12.png";
import s1a5178 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-51,78.png";
import s1a5847 from "../images/plans/1-section/2-5-floor/section-1-floor-2-5-2r-58,47.png";
import s2a3675 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-1r-36,75.png";
import s2a3681 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-1r-36,81.png";
import s2a3683 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-1r-36,83.png";
import s2a5458 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-2r-54,58.png";
import s2a5459 from "../images/plans/2-section/2-5-floor/section-2-floor-2-5-2r-54,59.png";

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
    image: s1a3521,
    type: "1-комнатная",
    area: "35.21",
    section: "1, 3",
  },
  {
    image: s1a3536,
    type: "1-комнатная",
    area: "35.36",
    section: "1, 3",
  },
  {
    image: s1a3541,
    type: "1-комнатная",
    area: "35.41",
    section: "1, 3",
  },
  {
    image: s1a3660,
    type: "1-комнатная",
    area: "36.60",
    section: "1, 3",
  },
  {
    image: s1a3682,
    type: "1-комнатная",
    area: "36.82",
    section: "1, 3",
  },
  {
    image: s1a4288,
    type: "2-комнатная",
    area: "42.88",
    section: "1, 3",
  },
  {
    image: s1a4912,
    type: "2-комнатная",
    area: "49.12",
    section: "1, 3",
  },
  {
    image: s1a5178,
    type: "2-комнатная",
    area: "51.78",
    section: "1, 3",
  },
  {
    image: s1a5847,
    type: "2-комнатная",
    area: "58.47",
    section: "1, 3",
  },
  {
    image: s2a3675,
    type: "1-комнатная",
    area: "36.75",
    section: "2",
  },
  {
    image: s2a3681,
    type: "1-комнатная",
    area: "36.81",
    section: "2",
  },
  {
    image: s2a3683,
    type: "1-комнатная",
    area: "36.83",
    section: "2",
  },
  {
    image: s2a5458,
    type: "2-комнатная",
    area: "54.58",
    section: "2",
  },
  {
    image: s2a5459,
    type: "2-комнатная",
    area: "54.59",
    section: "2",
  },
];

function Plans() {
  const classes = useStyles();
  const theme1 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = plans.length;
  const fullScreenLG = useMediaQuery(theme1.breakpoints.down("lg"));
  const fullScreenMD = useMediaQuery(theme1.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme1.breakpoints.down("sm"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
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
              <Fab
                variant="extended"
                size="medium"
                color="common"
                aria-label="all"
              >
                Все
              </Fab>
              <Fab
                variant="extended"
                size="medium"
                color="common"
                aria-label="studio"
                onClick={() => {}}
              >
                Студии
              </Fab>
              <Fab
                variant="extended"
                size="medium"
                color="common"
                aria-label="1room"
              >
                1-комнатные
              </Fab>
              <Fab
                variant="extended"
                size="medium"
                color="common"
                aria-label="2room"
              >
                2-комнатные
              </Fab>
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
                        src={plans[activeStep].image}
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
                              {plans[activeStep].type}
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
                              <Grid item>{plans[activeStep].area} м²</Grid>
                            </Grid>

                            <Grid container justifyContent="space-between">
                              <Grid item>Секция </Grid>
                              <Grid item>{plans[activeStep].section}</Grid>
                            </Grid>

                            <Grid container justifyContent="space-between">
                              <Grid item>Этаж</Grid> <Grid item> 2-5</Grid>
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
                  plans={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Fab
                      size="medium"
                      aria-label="next"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
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
