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
    paddingRight: 50
  },
  sliderBlock: {
    backgroundColor: "white",
    minHeight: 370,
    borderRadius: "180px 0 0",
    width: "100%",
    marginBottom: '20px !important'
  },
  title: {
    paddingBottom: 40,
    color: "white",
  },
  sliderBottom: {
    backgroundColor: "transparent !important",
    justifyContent: "center !important",
  },
  sliderButton: {
    boxShadow: "none !important",
    backgroundColor: "white !important",
    border: "1px solid #1f2e58 !important",
    marginRight: "20px !important",
  },
  formButton: {
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
    paddingRight: 25,
  },
  mobileAnchor: {
    position: "absolute",
    marginTop: "-55px",
  },
}));

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function Plans() {
  const classes = useStyles();
  const theme1 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

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
          <Grid item className={classes.sliderBlock}>
            <Box
              sx={{
                maxWidth: 850,
                flexGrow: 1,
                marginLeft: fullScreenSM ? 1 : 5,
                marginRight: 4,
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
                {steps[activeStep].description}
              </Box>
              <ThemeProvider theme={theme}>
                <MobileStepper
                  className={classes.sliderBottom}
                  variant="none" /* Здесь можешь добавить вместо none - dots/progress/text */
                  steps={maxSteps}
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
