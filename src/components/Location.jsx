import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Map from "../images/map.png";
import FormAndButton from "./FormAndButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
  },
  content: {
    padding: 100,
  },
  title: {
    color: "#1f2e58",
  },
  subtitle: {
    color: "white",
  },
  list: {
    paddingBottom: 100,
    "& > li": {
      paddingLeft: "0px !important",
      paddingBottom: 7,
      color: "white",
    },
  },
  mobileContainer: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    paddingBottom: 70,
    paddingTop: 70,
  },
  mobileContent: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: 'justify'
  },
  mobileAnchor: {
    position: 'absolute',
    marginTop: '-55px'
  },
  mobileList: {
      "& > li": {
        paddingBottom: 4,
        color: "white",
        justifyContent: 'center',
      },
  }
}));

export default function Location() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div id="location" className={fullScreenMD ? classes.mobileAnchor : classes.anchor}></div>

      <Container className={fullScreenMD ? classes.mobileContainer : classes.container}>
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
              alignItems={fullScreenMD ? 'center' : 'flex-start'}
              spacing={1}
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
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle}
                >
                  На территории комплекса мы создаём атмосферу, вдохновляющую на
                  общение, воспитание детей и здоровый отдых.
                </Typography>
              </Grid>
              <Grid item>
                <List className={fullScreenMD ? classes.mobileList : classes.list} alignItems="center">
                  <ListItem disablePadding>Детские сады</ListItem>
                  <ListItem disablePadding>Школы</ListItem>
                  <ListItem disablePadding>Поликлиники</ListItem>
                  <ListItem disablePadding>Торговый центр</ListItem>
                  <ListItem disablePadding>Общественный транспорт</ListItem>
                </List>
              </Grid>
              <Grid item>
                <FormAndButton content="Узнать больше" color="secondary" />
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
