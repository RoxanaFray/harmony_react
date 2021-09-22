import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import houseImage1 from "../images/house_image1.png";
import FormAndButton from "./FormAndButton";
import BirdImage from "../images/bird_image.png";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d5aa88",
  },
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    paddingBottom: 100,
    paddingTop: 100,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  title: {
      paddingLeft: 15 
  },
  accordionBlock: {
      marginBottom: 25,
      marginLeft: 0
  },
  accordion: {
      boxShadow: 'none !important',
      border: 'none !important',
      backgroundColor: 'transparent !important',
      content: 'none',
      '&:before': {
        content: 'none !important'
    }
  },

  
  accordionTitle: {
    color: 'white',
    borderBottom: '1px solid white',
    width: 135,
  },
  accordionDetails: {
    
  },
  accordionDescriptionText: {
      color: 'white'
  }


}));

export default function Dignities() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
 
          className={classes.content}
        >
          <Grid item xs="5">
            <Typography variant="h6" gutterBottom component="div" className={classes.title}>
              ДОСТОИНСТВА
            </Typography>
<div                className={classes.accordionBlock}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className={classes.accordion}
              disableGutters={true}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                
              >
                <Typography variant="subtitle1" className={classes.accordionTitle}>Архитектура</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Grid container className={classes.accordionDetails}>
                  <Grid item xs="4">
                      <img src={BirdImage} alt='Изображение' width='90'/>
                      </Grid>
                      <Grid item xs="8">
                <Typography variant="body2" className={classes.accordionDescriptionText}>
                  На территории комплекса мы создаём атмосферу, вдохновляющую на
                  общение, воспитание детей и здоровый отдых.
                  </Typography>
                  </Grid>
                  </Grid>

                
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className={classes.accordion}
            >
              <AccordionSummary
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                
              >
                <Typography variant="subtitle1" className={classes.accordionTitle}>Инфраструктура</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" className={classes.accordionDescriptionText}>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className={classes.accordion}
            >
              <AccordionSummary
                aria-controls="panel3bh-content"
                id="panel3bh-header"
        
              >
                <Typography variant="subtitle1" className={classes.accordionTitle}>Парковка</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" className={classes.accordionDescriptionText}>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
</div>
            <FormAndButton content="Узнать больше" />
          </Grid>
          <Grid item xs="7">
            <img
              src={houseImage1}
              width="600"
              alt="Изображение жилого комплекса"
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
