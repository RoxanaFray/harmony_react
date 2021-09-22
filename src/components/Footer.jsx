import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import RegionStroy from "../images/region_stroy.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1f2e58",
  },

  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingBottom: 15,
    paddingTop: 15,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
  },

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          spacing={24}
          justifyContent="space-between"
          alignItems="flex-start"
          className={classes.content}
        >
          <Grid item xs={5}>
            <Typography variant="body2">
              <b> Офис продаж</b>
              <br />
              Краснодар, Олимпийский проспект, дом 16
              <br />С 10:00 до 19:00, ежедневно
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">
              +7 961 245 23 45
              <br />
              harmony@regionstroy.ru
            </Typography>
          </Grid>
          <Grid item xs={4}>
              <Grid container spacing={2}>
                  <Grid item xs={8}>
            <Typography variant="body2">
              Застройщик
              <br />
              ООО "Регион-строй"
            </Typography>
            </Grid>
            <Grid item xs={4}>
                <img src={RegionStroy} width="90" alt="Логотип Регион-строй" className={classes.regionStroyLogo}/>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
