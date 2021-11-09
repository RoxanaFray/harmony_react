import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import BlueBirds from "../images/blue_birds.png";
import FeedbackImage from "../images/649-6.jpeg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  anchor: {
    position: "absolute",
    marginTop: "-100px",
  },
  container: {
    borderRight: "1px solid #1f2e58",
    borderLeft: "1px solid #1f2e58",
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
  buttonBlock: {
    marginTop: "20px !important",
  },
  button: {
    borderBottom: '1px solid #1f2e58',
    color: '#1f2e58',
    cursor: 'pointer',
    paddingBottom: 4,
    display: 'inline',
  },
  plus: {
    position: 'absolute',
    bottom: '-2px',
    left: 115,
    color: '#1f2e58',
},
  birds: {
    position: "absolute",
    left: "35%",
    marginTop: 25,
    zIndex: 1
  },
  pdfIcon: {
    color: "#1f2e58",
  },
  feedback: {
    zIndex: 2
  },
  itemText: {
    color: "#1f2e58",
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
}));


const DocumentsArr = [
  {
    title: "Разрешение на строительство - Литер 1",
    href: "https://xn----7sbfcciddltb2cgv9bq4o.xn--p1ai/",
  },
  {
    title: "Разрешение на строительство - Литер 1",
    href: "react-project/pdf/Литер 1 Мята продление от 29.05.2020 г..pdf",
  },
  {
    title: "Разрешение на строительство - Литер 2",
    href: "react-project/pdf/Литер 2 Мята продление от 29.05.2020 г..pdf",
  },
  {
    title: "Разрешение на строительство - Литер 3",
    href: "react-project/pdf/Литер 3 Мята продление от 30.04.20.pdf",
  },
  {
    title: "Разрешение на строительство - Литер 4",
    href: "react-project/pdf/Литер 4 Мята продление от 29.05.20 г..pdf",
  },
  {
    title: "Проектная декларация - Литер 1",
    href: "react-project/pdf/project_declaration_liter_1.pdf",
  },
  {
    title: "Проектная декларация - Литер 2",
    href: "react-project/pdf/project_declaration_liter_2.pdf",
  },
];

export default function Documents() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme1 = useTheme();
  const fullScreenMD = useMediaQuery(theme1.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme1.breakpoints.down("sm"));

  const handleClick = () => {
    setOpen(!open);
  };

  function MyListItemButton(props) {
    return (
      <ListItemButton component="a" href={props.href} target="_blank">
        <ListItemIcon>
          <PictureAsPdfIcon className={classes.pdfIcon} />
        </ListItemIcon>
        <ListItemText primary={props.title} className={classes.itemText} />
      </ListItemButton>
    );
  }

  return (
    <div className={classes.root}>
      <div
        id="documents"
        className={fullScreenMD ? classes.mobileAnchor : classes.anchor}
      ></div>

      <Container
        className={fullScreenMD ? classes.mobileContainer : classes.container}
      >
        {fullScreenMD ? (
          <div />
        ) : (
          <img
            src={BlueBirds}
            alt="Птички на фоне"
            width="35%"
            className={classes.birds}
          ></img>
        )}

        <Grid
          container
          direction={fullScreenMD ? "column" : "row"}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          className={fullScreenSM ? classes.mobileContent : classes.content}
        >
          <Grid item xs={6} className={classes.documents}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              className={classes.title}
              textAlign={fullScreenMD ? 'center' : 'left'}
            >
              ДОКУМЕНТЫ
            </Typography>
            <List
              sx={{ width: "100%", maxWidth: fullScreenSM ? 360 : 800, bgcolor: "background.paper" }}
              component="nav"
            >
              <ListItemButton
                component="a"
                href="https://xn----7sbfcciddltb2cgv9bq4o.xn--p1ai/"
                target="_blank"
              >
                <ListItemIcon>
                  <PictureAsPdfIcon className={classes.pdfIcon} />
                </ListItemIcon>

                <ListItemText
                  primary="Разрешение на строительство"
                  className={classes.itemText}
                />
              </ListItemButton>
              <ListItemButton
                component="a"
                href="https://xn----7sbfcciddltb2cgv9bq4o.xn--p1ai/"
                target="_blank"
              >
                <ListItemIcon>
                  <PictureAsPdfIcon className={classes.pdfIcon} />
                </ListItemIcon>
                <ListItemText
                  primary="Проектная декларация"
                  className={classes.itemText}
                />
              </ListItemButton>
              <ListItemButton
                component="a"
                href="https://xn----7sbfcciddltb2cgv9bq4o.xn--p1ai/"
                target="_blank"
              >
                <ListItemIcon>
                  <PictureAsPdfIcon className={classes.pdfIcon} />
                </ListItemIcon>
                <ListItemText
                  primary="Разрешение на строительство Литер 2"
                  className={classes.itemText}
                />
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {DocumentsArr.map((elem) => {
                    return (
                      <MyListItemButton title={elem.title} href={elem.href} />
                    );
                  })}
                </List>
              </Collapse>
           
               <Grid container className={classes.buttonBlock} 
               justifyContent={fullScreenMD ? 'center' : 'flex-start'}>
                  <Typography variant='body1' className={classes.button} onClick={handleClick} >
                     {open ? 'Свернуть' : 'Смотреть все'}
                     <div className={classes.plus}>
                     {open || fullScreenMD ? '' : '+'}
                       </div>
                   </Typography>
                   </Grid>
                  
                  
        
        
            </List>
          </Grid>
          <Grid item xs={6} className={classes.feedback}>
            <img
              src={FeedbackImage}
              alt="Отзывы"
              width="100%"
              className={classes.feedbackImage}
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
