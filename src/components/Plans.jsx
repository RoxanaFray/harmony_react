import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import CallbackForm from "./CallbackForm";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

// section plans
import firstsection2and5floor from "../images/plans/firstsection2and5floor.png";
import secondsection2and5floor from "../images/plans/secondsection2and5floor.png";
import thirdsection2and5floor from "../images/plans/thirdsection2and5floor.png";
import apartmentsPlansData from "../data/apartmentsPlansData.json";

import getApartmentTypeString from "../utils/apartmentsTypeString";
import getImagesDynamic from "../utils/getImagesDynamic";


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
  ModalBackground: {
    "& div": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    }
  },
  modalBlock: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: "80%"
  },
  modalImage: {
    maxWidth: "90%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  anchor: {
    position: "absolute",
    marginTop: "-55px",
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
  chooseSectionButtons: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    "& button": {
      width: "100%",
      backgroundColor: "white",
      color: "#1f2e58",
      border: "1px solid #1f2e58",
      boxShadow: "none !important",
    },
  },
  chooseSectionButtonsMD: {
    paddingBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    paddingLeft: "0px !important",
    "& button": {
      width: "100%",
      backgroundColor: "white",
      color: "#1f2e58",
      border: "1px solid #1f2e58",
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
  floorImageBlock: {
    width: "100%",
    height: 400,
    position: "relative",
    paddingLeft: 10,

  },
  floorImageBlockLG: {
    width: "100%",
    height: 300,
    position: "relative",
    paddingLeft: 10,
  },
  floorImageBlockSM: {
    width: "100%",
    height: 250,
    position: "relative",
    paddingLeft: 10,
  },
  floorImage: {
    maxWidth: "95%",
    maxHeight: "90%",
    positon: 'relative',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    cursor: "zoom-in"
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

const allApartmentPlansImages = getImagesDynamic();
const apartmentsPlans = apartmentsPlansData.map((elem) => {
  return {
    image: allApartmentPlansImages[elem.path].default,
    type: getApartmentTypeString(elem.rooms),
    floor: elem.floor,
    area: elem.area,
    section: elem.section,
  };
})
const sectionPlans = {
  1: firstsection2and5floor,
  2: secondsection2and5floor,
  3: thirdsection2and5floor,
}

const allFlatTypes = apartmentsPlans
  .map((elem) => elem.type)
  .filter(function (item, pos, array) {
    return array.indexOf(item) === pos;
  });

function Plans(props) {
  const classes = useStyles();
  const theme1 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [floors, showFloors] = React.useState(false);
  const [section, selectSection] = React.useState(1);
  const [modal, setModal] = React.useState(false);
  const [selectedFlatType, setSelectedFlatType] = React.useState(allFlatTypes[0])

  const fullScreenLG = useMediaQuery(theme1.breakpoints.down("lg"));
  const fullScreenMD = useMediaQuery(theme1.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme1.breakpoints.down("sm"));
  const [plansArr, updatePlansArr] = React.useState(apartmentsPlans);

  function filterPlans(param) {
    setSelectedFlatType(param);
    let result = [];
    result = apartmentsPlans.filter((elem) => {
      return elem.type === param
    });
    setActiveStep(0);
    updatePlansArr(result);
  }
  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.ModalBackground}
        open={modal}
        onClose={() => setModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <Box sx={classes.modalBlock}>
            <img
              alt="Планы секций"
              src={sectionPlans[section]}
              className={classes.modalImage}
            />
          </Box>
        </Fade>
      </Modal>
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
                  size={selectedFlatType === type ? "large" : "medium"}
                  color="common"
                  aria-label="flatType"
                  onClick={() => {
                    filterPlans(type);
                    showFloors(false);
                  }}
                >
                  {type}
                </Fab>
              ))}
              <Fab
                variant="extended"
                size={selectedFlatType === "План этажа" ? "large" : "medium"}
                color="common"
                aria-label="floorPlan"
                onClick={() => {
                  setSelectedFlatType("План этажа")
                  showFloors(true);
                }}
              >
                План этажа
              </Fab>
            </Stack>
          </Grid>


          <ThemeProvider theme={theme}>
            <Grid
              item
              className={
                fullScreenMD ? classes.sliderBlockMD : classes.sliderBlock
              }
            >
              {!floors &&
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
                            alt="Изображение планировки"
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
                                  <Grid item>Этаж</Grid>{" "}
                                  <Grid item>{plansArr[activeStep]?.floor}</Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.apartmentButton}>
                            <CallbackForm
                              content={fullScreenSM ? "Консультация" : "Получить консультацию"}
                              color="secondary"
                              data={{
                                subject: "Заявка с сайта ЖК Гармония",
                                text: `Секция: ${plansArr[activeStep]?.section}\nЭтаж: ${plansArr[activeStep]?.floor}\nПланировка: ${plansArr[activeStep]?.area}`
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                  <MobileStepper
                    className={classes.sliderBottom}
                    variant="none" // Здесь можешь добавить вместо none - dots/progress/text 
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
                </Box>
              }
              {floors &&
                <Grid
                  item
                >
                  <Stack direction={fullScreenSM ? "column" : "row"} spacing={2} alignItems="flex-end" className={
                    fullScreenMD
                      ? classes.chooseSectionButtonsMD
                      : classes.chooseSectionButtons}>
                    <Fab variant="extended"
                      size={section === 1 ? "large" : "medium"}
                      color="common"
                      aria-label="1-section"
                      onClick={() => { showFloors(true); selectSection(1) }}
                    >
                      1 секция
                    </Fab>
                    <Fab variant="extended"
                      size={section === 2 ? "large" : "medium"}
                      color="common"
                      aria-label="2-section"
                      onClick={() => { showFloors(true); selectSection(2) }}
                    >
                      2 секция
                    </Fab>
                    <Fab variant="extended"
                      size={section === 3 ? "large" : "medium"}
                      color="common"
                      aria-label="3-section"
                      onClick={() => { showFloors(true); selectSection(3) }}
                    >
                      3 секция
                    </Fab>
                  </Stack>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <div
                        className={
                          fullScreenSM
                            ? classes.floorImageBlockSM
                            : fullScreenLG
                              ? classes.floorImageBlockLG
                              : classes.floorImageBlock
                        }
                      >
                        <img
                          src={sectionPlans[section]}
                          alt="Изображение этажа"
                          className={classes.floorImage}
                          onClick={() => { setModal(section) }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

              }
            </Grid>
          </ThemeProvider>
          <Grid item className={classes.formButton}>
            <CallbackForm
              content={fullScreenSM ? "Консультация" : "Получить консультацию"}
              color="primary"
              data={{
                subject: "Заявка с сайта ЖК Гармония",
                text: `Секция: ${section}`
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Plans;
