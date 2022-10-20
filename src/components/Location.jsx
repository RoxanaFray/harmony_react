import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Map from "../images/mapimage-1.png";
import CallbackForm from "./CallbackForm";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImageModal from './ImageModal'


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
  map: {
    cursor: 'zoom-in',
    borderRadius: "0 40px 0 0"
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
  imgWrapper: {
    position: 'relative',
    padding: '0 !important',
    paddingTop: '40px !important'
  },
  imageComment: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#4c4c4c',
    bottom: 3,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    cursor: 'pointer'
  },
}));

export default function Location() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md")); // 900px
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm")); // 600px
  const [modal, setModal] = React.useState(false);


  return (
    <div className={classes.root}>
      <ImageModal modal={modal} setModal={() => setModal(false)} image={Map} close={() => setModal(false)}></ImageModal>

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
          spacing={fullScreenMD ? 0 : 4}
          justifyContent="space-between"
          alignItems="center"
          className={fullScreenSM ? classes.mobileContent : classes.content}
        >
          <Grid item xs={6}>
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
                 Микрорайон имени Жукова с 1993 существовал как «военный городок», дома в котором возводились турецкой компанией ENKA. Название закрепилось среди жителей Краснодара, и теперь Энка - один из самых благополучных спальных районов города, с большим преимуществом в своём расположении:
                </Typography>
              </Grid>
              <Grid item>
                <List
                  className={fullScreenMD ? classes.mobileList : classes.list}
                >
                  <ListItem disablePadding>- 10 минут до Красной площади </ListItem>
                  <ListItem disablePadding>- 15 минут до Баскет-Холла </ListItem>
                  <ListItem disablePadding>- 20 минут до центра города</ListItem>
                </List>
              </Grid>
              <Grid item>
                <CallbackForm
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
          <Grid item xs={6} className={classes.imgWrapper}>
            <div className={classes.imageComment} onClick={() => { setModal(Map) }}>Нажмите на изображение, чтобы открыть его на весь экран</div>
            <img src={Map} alt="Карта" className={classes.map} onClick={() => { setModal(Map) }} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
