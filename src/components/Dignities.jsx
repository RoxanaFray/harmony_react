import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import houseImage1 from "../images/651-6.jpeg";
import FormAndButton from "./FormAndButton";
import BirdImage from "../images/bird_image.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d5aa88",
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
    paddingLeft: 50,
    paddingRight: 50,
  },
  title: {
    paddingLeft: 15,
    color: "#1f2e58",
  },
  accordionBlock: {
    marginBottom: 25,
    marginLeft: 0,
  },
  accordion: {
    boxShadow: "none !important",
    border: "none !important",
    backgroundColor: "transparent !important",
    content: "none",
    "&:before": {
      content: "none !important",
    },
  },
  accordionSummary: {
    textAlign: "center",
    "& div": {
      justifyContent: "center",
    },
  },
  accordionTitle: {
    color: "white",
    borderBottom: "1px solid white",
    width: 135,
  },
  plus: {
    position: "absolute",
    bottom: 5,
    left: 158,
    color: "white",
  },
  accordionDetails: {
    textAlign: "center",
  },
  accordionDescriptionText: {
    color: "white",
  },
  list: {
    "& > li": {
      paddingLeft: "0px !important",
      paddingBottom: 5,
      color: "white",
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
    paddingLeft: 25,
    paddingRight: 25,
  },
  mobileAnchor: {
    position: "absolute",
    marginTop: "-55px",
  },
  openAccordion: {
    boxShadow: "none !important",
    border: "none !important",
    backgroundColor: "transparent !important",
    content: "none",
    "&:before": {
      content: "none !important",
    },
    "& h6": {
      width: "90%",
    },
    "& div:nth-child(2)": {
      left: "90%",
    },
  },
  mobileList: {
    "& > li": {
      paddingBottom: 4,
      color: "white",
      justifyContent: "center",
    },
  },
}));

export default function Dignities() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div
        id="dignities"
        className={fullScreenMD ? classes.mobileAnchor : classes.anchor}
      ></div>

      <Container
        className={fullScreenMD ? classes.mobileContainer : classes.container}
      >
        <Grid
          container
          direction={fullScreenMD ? "column" : "row"}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          className={fullScreenSM ? classes.mobileContent : classes.content}
        >
          <Grid item xs="5">
            <Grid
              container
              direction="column"
              alignItems={fullScreenMD ? "center" : "flex-start"}
              spacing={fullScreenSM ? 2 : 0}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  className={classes.title}
                  align={fullScreenMD ? "center" : "left"}
                >
                  ДОСТОИНСТВА
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.accordionBlock}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    className={
                      expanded === "panel1"
                        ? classes.openAccordion
                        : classes.accordion
                    }
                    disableGutters={true}
                  >
                    <AccordionSummary
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      className={fullScreenMD ? classes.accordionSummary : ""}
                    >
                      <Typography
                        variant="subtitle1"
                        className={classes.accordionTitle}
                      >
                        Архитектура
                      </Typography>
                      <div className={classes.plus}>
                        {fullScreenMD ? "" : "+"}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid
                        container
                        direction={fullScreenMD ? "column" : "row"}
                        className={fullScreenMD ? classes.accordionDetails : ""}
                      >
                        <Grid item xs="4">
                          <img src={BirdImage} alt="Изображение" width="90" />
                        </Grid>
                        <Grid item xs="8">
                          <Typography
                            variant="body2"
                            className={classes.accordionDescriptionText}
                          >
                            Конструкция жилого комплекса «Гармония» выполнена по
                            технологии монолит-кирпич. Наружный фасад здания
                            также отвечает последним архитектурным тенденциям –
                            применена технология вентилируемого фасада.
                          </Typography>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    className={
                      expanded === "panel2"
                        ? classes.openAccordion
                        : classes.accordion
                    }
                    disableGutters={true}
                  >
                    <AccordionSummary
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                      className={fullScreenMD ? classes.accordionSummary : ""}
                    >
                      <Typography
                        variant="subtitle1"
                        className={classes.accordionTitle}
                      >
                        О комплексе
                      </Typography>
                      <div className={classes.plus}>
                        {fullScreenMD ? "" : "+"}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid
                        container
                        direction={fullScreenMD ? "column" : "row"}
                        className={fullScreenMD ? classes.accordionDetails : ""}
                      >
                        <Grid item xs="4">
                          <img src={BirdImage} alt="Изображение" width="90" />
                        </Grid>
                        <Grid item xs="8">
                          <Typography
                            variant="body2"
                            className={classes.accordionDescriptionText}
                          >
                            Жилой комплекс оборудован бесшумными
                            грузопассажирскими лифтами, детскими и спортивными
                            площадками, многоуровневым паркингом, зелеными
                            насаждениями
                          </Typography>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    className={
                      expanded === "panel3"
                        ? classes.openAccordion
                        : classes.accordion
                    }
                    disableGutters={true}
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                      className={fullScreenMD ? classes.accordionSummary : ""}
                    >
                      <Typography
                        variant="subtitle1"
                        className={classes.accordionTitle}
                      >
                        Инфраструктура
                      </Typography>
                      <div className={classes.plus}>
                        {fullScreenMD ? "" : "+"}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid
                        container
                        direction={fullScreenMD ? "column" : "row"}
                        className={fullScreenMD ? classes.accordionDetails : ""}
                      >
                        <Grid item xs="4">
                          <img src={BirdImage} alt="Изображение" width="90" />
                        </Grid>
                        <Grid item xs="8">
                          <List
                            className={
                              fullScreenMD ? classes.mobileList : classes.list
                            }
                          >
                            <ListItem disablePadding>
                              - 2 среднеобразовательные школы
                            </ListItem>
                            <ListItem disablePadding>
                              - 2 государственных детских сада
                            </ListItem>
                            <ListItem disablePadding>- 4 сквера</ListItem>
                            <ListItem disablePadding>- Гипермаркеты</ListItem>
                            <ListItem disablePadding>
                              - ТЦ «Красная площадь»
                            </ListItem>
                            <ListItem disablePadding>
                             - Многоуровневый паркинг
                            </ListItem>
                            <ListItem disablePadding>
                             - Остановки общественного транспорта
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item>
                <FormAndButton content="Узнать больше" color="secondary" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="7">
            <img
              src={houseImage1}
              width="100%"
              alt="Изображение жилого комплекса"
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
