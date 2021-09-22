import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import houseImage from "../images/house_image.png";
import Typography from "@mui/material/Typography";
import FormAndButton from "./FormAndButton"


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1f2e58",
  },
  /*   Это всё ниже для того, чтобы были белые полосы, обязательно отредактируй
   */
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    paddingBottom: 100,
    paddingTop: 200,
  },
  content: {
    marginTop: 100,
    marginBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  title: {
    paddingBottom: 10,
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
  },
  numberComment: {
    color: "white",
    textAlign: "center",
    "& a": {
      color: "white",
    },
  },
  whiteBorderBlock: {
    width: "100%",
    borderTop: "1px solid white",
  },
}));

export default function AboutComplex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          spacing={25}
          justifyContent="space-between"
          alignItems="flex-end"
          className={classes.content}
        >
          <Grid item xs={6}>
            <img
              src={houseImage}
              width="550"
              alt="Изображение жилого комплекса"
              className={classes.complexImage}
            ></img>
          </Grid>

          <Grid item xs={6}>
            <Grid container direction="column" alignItems="flex-start">
              <Grid item xs={2}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  className={classes.title}
                >
                  ЖИЛОЙ КОМПЛЕКС «ГАРМОНИЯ»
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.description}
                >
                  Виды жилого комплекса «Гармония» покорят вас невероятно. Это
                  же несколько невысоких домов в прекрасном районе с самыми
                  лучшими закатами и все такое.
                </Typography>
              </Grid>
              <Grid item xs={2}>
               <FormAndButton
                content="Оставить заявку"
               />
              </Grid>

              <Grid item xs={4}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                  className={classes.numberBlock}
                >
                  <Grid item xs={4}>
                    <Grid container direction="column" alignItems="center">
                      <Grid item xs={6} className={classes.number}>
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
                      <Grid item xs={6} className={classes.number}>
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
                      <Grid item xs={6} className={classes.number}>
                        5
                      </Grid>
                      <Grid item xs={6} className={classes.numberComment}>
                        км до центра <a href="">посмотреть на карте</a>
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
