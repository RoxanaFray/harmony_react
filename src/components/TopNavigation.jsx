import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import logo from "../images/blue_logo.png";
import facebookLogo from "../images/white_facebook_logo.png";
import VkLogo from "../images/white_vk_logo.png";
import InstagramLogo from "../images/white_instagram_logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import LeftDrawer from "./LeftDrawer";


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
  content: {
    paddingTop: 25,
    paddingBottom: 25
  },
  menuItem: {
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
    textAlign: 'center !important',
  },
  logo: {
    position: "absolute",
    top: 15,
    paddingLeft: 10
  },
  social: {
    paddingRight: 5,
  },
  mobileLogo: {
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: "-70px",
  },
}));

const DesktopMenu = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none !important",
  },
}));

const MobileMenu = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "none !important",
  },
  [theme.breakpoints.down("lg")]: {
    display: "block !important",
  },
}));

export default function TopNavigation() {
  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <DesktopMenu>
        {/*Верхнее меню в десктопной версии */}
        <AppBar position="fixed" color="primary" className={classes.menu}>
          <Container className={classes.container}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                columns={{ lg: 23 }}
                spacing={0}
                className={classes.content}
              >
                <Grid item lg={3}>
                  <a href="#about_complex" className={classes.menuItem}>
                    О КОМПЛЕКСЕ
                  </a>
                </Grid>

                <Grid item lg={3}>
                  <a href="#dignities" className={classes.menuItem}>
                    ДОСТОИНСТВА
                  </a>
                </Grid>

                <Grid item lg={3}>
                  <a href="#plans" className={classes.menuItem}>
                    ПЛАНИРОВКИ
                  </a>
                </Grid>

                <Grid item lg={5}>
                  <a href="">
                    <img
                      src={logo}
                      width="180"
                      alt="Логотип"
                      className={classes.logo}
                    ></img>
                  </a>
                </Grid>

                <Grid item lg={4}>
                  <a href="#location" className={classes.menuItem}>
                    РАСПОЛОЖЕНИЕ
                  </a>
                </Grid>

                <Grid item lg={3}>
                  <a href="#documents" className={classes.menuItem}>
                    ДОКУМЕНТЫ
                  </a>
                </Grid>

                <Grid item lg={2}>
                <a href="#contacts" className={classes.menuItem}>
                    КОНТАКТЫ
                </a>
                  {/* <a href="" className={classes.social}>
                    <img src={VkLogo} alt="Логотип Вконтакте" width="30"></img>
                  </a>
                  <a href="" className={classes.social}>
                    <img
                      src={InstagramLogo}
                      alt="Логотип Инстаграм"
                      width="30"
                    ></img>
                  </a>
                  <a href="" className={classes.social}>
                    <img
                      src={facebookLogo}
                      alt="Логотип Facebook"
                      width="30"
                    ></img>
                  </a> */}
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </DesktopMenu>

      <MobileMenu>
        <AppBar position="fixed" color="primary" className={classes.mobileMenu}>
          <Container className={classes.container}>
            <Toolbar>
              <LeftDrawer />
              <a href="">
                <img
                  src={logo}
                  width="140"
                  alt="Логотип"
                  className={classes.mobileLogo}
                ></img>
              </a>
            </Toolbar>
          </Container>
        </AppBar>
      </MobileMenu>
    </ThemeProvider>
  );
}
