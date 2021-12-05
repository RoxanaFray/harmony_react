import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Map from "../images/map.png";
import FormAndButton from "./FormAndButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d5aa88",
  },
  anchor: {
    position: "absolute",
    marginTop: "-60px",
  },
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingTop: 100,
    paddingBottom: 100
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50
  },
  title: {
    color: "#1f2e58",
  },
  subtitle: {
    color: "white",
  },
  list: {
    paddingBottom: '20px !important',
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
    textAlign: "justify",
  },
  mobileAnchor: {
    position: "absolute",
    marginTop: "-55px",
  },
  mobileList: {
    "& > li": {
      paddingBottom: 4,
      color: "white",
      justifyContent: "center",
    },
  },
}));

export default function Location() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div
        id="location"
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
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              alignItems={fullScreenMD ? "center" : "flex-start"}
              spacing={fullScreenSM ? 3 : 1}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  РАСПОЛОЖЕНИЕ
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  Жилой комплекс расположен в развитом районе города,
                  вблизи от основных транспортных путей – ул. Дзержинского.
                  В непосредственной близости находятся:
                </Typography>
              </Grid>
              <Grid item>
                <List
                  className={fullScreenMD ? classes.mobileList : classes.list}
                >
                  <ListItem disablePadding>- Школы</ListItem>
                  <ListItem disablePadding>- Детские сады</ListItem>
                  <ListItem disablePadding>- Продуктовые магазины и рынки</ListItem>
                  <ListItem disablePadding>- Торговый центр «Красная площадь»</ListItem>
                </List>
              </Grid>
              <Grid item>
                <FormAndButton
                  content="Узнать больше"
                  color="secondary"
                  data={{
                    subject: "Заявка с сайта ЖК Гармония",
                    text: `Секция сайта: Локация`
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            {/*               Здесь будет реальная карта, но пока картинка */}
            <img src={Map} alt="Карта" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
