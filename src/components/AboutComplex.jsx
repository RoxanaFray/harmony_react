import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import houseImage from "../images/house_image.png";
import Typography from "@mui/material/Typography";
import FormAndButton from "./FormAndButton"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1f2e58",
  },
  anchor: {
    position: 'absolute',
    marginTop: '-100px'
    },
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    paddingBottom: 100,
    paddingTop: 200,
  },
  content: {
    width: '100%',
    marginTop: 100,
    marginBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  title: {
    paddingBottom: 10,
    color: 'white'
  },
  description: {
    color: "white",
    paddingBottom: 20,
  },
  numberBlock: {
    paddingTop: 20,
    marginBottom: 30,
  },
  number: {
    fontSize: 48,
    fontWeight: "bold",
    color: 'white'
  },
  numberComment: {
    color: "white",
    textAlign: "center",
    "& a": {
      color: "#d5aa88",
    },
  },
  whiteBorderBlock: {
    width: "100%",
    borderTop: "1px solid white",
  },
  mobileNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: 'white'
  },
  mobileContainer: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    paddingBottom: 50,
    paddingTop: 150,
  },
  mobileContent: {
    width: '100%',
    marginBottom: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },
  mobileAnchor: {
    position: 'absolute',
    marginTop: '-55px'
  }
}));


export default function AboutComplex() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <div className={classes.root}>
      <div id="about_complex" className={fullScreenMD ? classes.mobileAnchor : classes.anchor}></div>
      <Container className={fullScreenMD ? classes.mobileContainer : classes.container}>
        <Grid
          container
          direction={fullScreenMD ? "column" : "row"}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          className={fullScreenSM ? classes.mobileContent : classes.content} >
          <Grid item xs={6}>
            <img
              src={houseImage}
              width="100%"
              alt="Изображение жилого комплекса"
              className={classes.complexImage}
            ></img>
          </Grid>

          <Grid item xs={6}>
            <Grid container direction="column" alignItems={fullScreenMD ? "center" : "flex-start"}>
              <Grid item xs={2}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  className={classes.title}
                  align={fullScreenMD ? "center" : "left"}
                >
                  ЖИЛОЙ КОМПЛЕКС «ГАРМОНИЯ»
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.description}
                  align={fullScreenSM ? "justify" : "left"}
                >
                  Виды жилого комплекса «Гармония» покорят вас невероятно. Это
                  же несколько невысоких домов в прекрасном районе с самыми
                  лучшими закатами и все такое.
                </Typography>
              </Grid>
              <Grid item xs={2}>
               <FormAndButton
                content="Оставить заявку"
                color="primary"
               />
              </Grid>

              <Grid item xs={4}>
                <Grid
                  container
                  direction={fullScreenSM ? 'column' : 'row'}
                  spacing={4}
                  justifyContent="space-between"
                  alignItems="center"
                  className={classes.numberBlock}
                >
                  <Grid item xs={4}>
                    <Grid container direction="column" alignItems="center">
                      <Grid item xs={6} className={fullScreenMD ? classes.mobileNumber : classes.number}>
                        40
                      </Grid>
                      <Grid item xs={6} className={classes.numberComment}>
                        квартир <br /> разных <br /> планировок
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    {" "}
                    <Grid container direction="column" alignItems="center">
                      <Grid item xs={6} className={fullScreenMD ? classes.mobileNumber : classes.number}>
                        200
                      </Grid>
                      <Grid item xs={6} className={classes.numberComment}>
                        машиномест <br /> на открытой <br /> парковке
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    {" "}
                    <Grid container direction="column" alignItems="center">
                      <Grid item xs={6} className={fullScreenMD ? classes.mobileNumber : classes.number}>
                        5
                      </Grid>
                      <Grid item xs={6} className={classes.numberComment}>
                        км до центра {fullScreenSM ? <br/> : <span/>} <a href="">посмотреть на карте</a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.whiteBorderBlock} />
      </Container>
    </div>
  );
}
