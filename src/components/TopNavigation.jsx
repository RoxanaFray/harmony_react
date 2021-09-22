import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import logo from "../images/blue_logo.png";
import facebookLogo from "../images/facebook_logo.png";
import VkLogo from "../images/vk_logo.png";
import InstagramLogo from "../images/instagram_logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2e58",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    borderBottom: "1px solid white",
  },
  menu: {
    boxShadow: "none !important",
  },
  menuParts: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  menuItem: {
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
  },
  logo: {
    position: "absolute",
    top: 35,
  },
  social: {
    paddingRight: 5,
  },
}));

export default function TopNavigation() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary" className={classes.menu}>
        <Container className={classes.container}>
          <Toolbar>
            <Grid
              container
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item xs={5}>
                <Grid
                  container
                  justifyContent="space-between"
                  className={classes.menuParts}
                >
                  <Grid item xs={4}>
                    <a href="#about_complex" className={classes.menuItem}>
                      О КОМПЛЕКСЕ
                    </a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#dignities" className={classes.menuItem}>
                      ДОСТОИНСТВА
                    </a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#plans" className={classes.menuItem}>
                      ПЛАНИРОВКИ
                    </a>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={2}>
                <a href="">
                  <img src={logo} width="170" alt="Логотип" className={classes.logo}></img>
                </a>
              </Grid>

              <Grid item xs={5}>
                <Grid
                  container
                  justifyContent="space-between"
                  className={classes.menuParts}
                >
                  <Grid item xs={4}>
                    <a href="#location" className={classes.menuItem}>
                      РАСПОЛОЖЕНИЕ
                    </a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#documents" className={classes.menuItem}>
                      ДОКУМЕНТЫ
                    </a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="" className={classes.social}>
                      <img src={VkLogo} alt="Логотип Вконтакте" width="30"></img>
                    </a>
                    <a href="" className={classes.social}>
                      <img src={InstagramLogo} alt="Логотип Инстаграм" width="30"></img>
                    </a>
                    <a href="" className={classes.social}>
                      <img src={facebookLogo} alt="Логотип Facebook" width="30"></img>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.leftMenuLines}></div>
      <div className={classes.rightMenuLines}></div>
    </ThemeProvider>
  );
}
