import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import CallbackForm from "./FormAndButton";
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


// apartment plans 
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
// section plans
import firstsection2and5floor from "../images/plans/firstsection2and5floor.png";
import secondsection2and5floor from "../images/plans/secondsection2and5floor.png";
import thirdsection2and5floor from "../images/plans/thirdsection2and5floor.png";


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
    width: 400,
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
const sectionPlans = {
  1: firstsection2and5floor,
  2: secondsection2and5floor,
  3: thirdsection2and5floor,
}

const allFlatTypes = plans
  .map((elem) => elem.type)
  .filter(function (item, pos, array) {
    return array.indexOf(item) == pos;
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
  const [plansArr, updatePlansArr] = React.useState(plans);

  function filterPlans(param) {
    setSelectedFlatType(param);
    let result = [];
    result = plans.filter((elem) => {
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
