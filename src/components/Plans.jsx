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


const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2e58",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1f2e58",
  },
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
  },
  contentBlock: {
    padding: 100,
  },
  sliderBlock: {
    backgroundColor: "#1ae8dc",
    height: 370,
    borderRadius: "180px 0 0",
    width: "100%",
  },
  title: {
    paddingBottom: 20,
  },
  sliderBottom: {
    backgroundColor: 'transparent !important',
    justifyContent: 'center !important',
    paddingRight: 20
  },
  sliderButton: {
    boxShadow: "none !important",
    backgroundColor: "white !important",
    border: '1px solid #1f2e58 !important',
    marginRight: '20px !important'
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
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          className={classes.contentBlock}
          spacing={4}
        >
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              className={classes.title}
            >
              ПЛАНИРОВКИ
            </Typography>
          </Grid>
          <Grid item className={classes.sliderBlock}>
            <Box sx={{ maxWidth: 850, flexGrow: 1, marginLeft: 5 }} >
              <Box
                sx={{
                  height: 220,
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
          <Grid item>
            <FormAndButton content="Получить консультацию" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Plans;
