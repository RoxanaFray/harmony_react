import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import logo from "../images/blue_logo.png";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#d5aa88",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    backgroundColor: "#1f2e58",
    height: "100%",
    width: "300px",
  },
  logo: {
    marginLeft: "15%",
    marginTop: 20,
  },
  list: {
    marginTop: "30px !important",
  },
  itemText: {
    color: "white",
  },
  divider: {
    backgroundColor: "white !important",
  },
}));

const LinkArr = [
  {
    href: "#about_complex",
    title: "О комплексе",
    icon: <InfoOutlinedIcon color="secondary" />,
  },
  {
    href: "#dignities",
    title: "Достоинства",
    icon: <StarRateOutlinedIcon color="secondary" />,
  },
  {
    href: "#plans",
    title: "Планировки",
    icon: <DomainOutlinedIcon color="secondary" />,
  },
  {
    href: "#location",
    title: "Расположение",
    icon: <LocationOnOutlinedIcon color="secondary" />,
  },
  {
    href: "#documents",
    title: "Документы",
    icon: <DescriptionOutlinedIcon color="secondary" />,
  },
  {
    href: "#contacts",
    title: "Контакты",
    icon: <CallOutlinedIcon color="secondary" />,
  },
];

export default function LeftDrawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  function MyListItemLink(props) {
    return (
      <ListItemLink
        onClick={() => {
          setIsOpen(false);
        }}
        button
        href={props.href}
        key={props.title}
      >
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title} className={classes.itemText} />
      </ListItemLink>
    );
  }

  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        aria-label="menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <div className={classes.drawerContent}>
          <div className={classes.logo}>
            <a href="#">
              <img src={logo} width="200px"></img>
            </a>
          </div>

          <Divider className={classes.divider} />
          <ThemeProvider theme={theme}>
            <List className={classes.list}>
              {LinkArr.map((elem) => {
                return (
                  <MyListItemLink
                    href={elem.href}
                    title={elem.title}
                    icon={elem.icon}
                  />
                );
              })}
            </List>
          </ThemeProvider>
        </div>
      </SwipeableDrawer>
    </>
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
