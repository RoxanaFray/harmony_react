import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Link from '@mui/material/Link';

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
  anchor: {
    position: "absolute",
  },
  content: {
    "& p": {
      color: "white",
    },
  },
}));

const MyFooter = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const theme1 = useTheme();
  const fullScreenMD = useMediaQuery(theme1.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <div
        id="contacts"
        className={classes.anchor}
      ></div>
      <Container className={classes.container}>
        <MyFooter>
          <Grid
            container
            spacing="20"
            direction={fullScreenMD ? "column" : "row"}
            justifyContent="space-between"
            alignItems={fullScreenMD ? "center" : "flex-start"}
            className={classes.content}
          >
            <Grid item xs={4}>
              <Typography variant="body2">
                <b> Офис продаж</b>
                <br />
                  Краснодар, ул. Кореновская, дом 10
                <br />С 9:00 до 18:00, ежедневно
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">
                <Link color="inherit" href='tel:8 800 550 30 99'>
                  8 800 550 30 99
                </Link>
                <br />
                <Link color="inherit" href='mailto:info@zkgarmonia.ru'>
                  info@zkgarmonia.ru
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">
                Застройщик 
                <br />
                ООО "Гармония"
              </Typography>
            </Grid>
            {/* <Grid item xs={2}>
              <img
                src='https://picsum.photos/200/300'
                width="90"
                alt="Логотип Регион-строй"
                className={classes.regionStroyLogo}
              />
            </Grid> */}
          </Grid>
        </MyFooter>
      </Container>
    </div>
  );
}
