import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Map from "../images/map.png";
import FormAndButton from "./FormAndButton";
import Typography from "@mui/material/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d5aa88",
  },
  container: {
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
  },
  content: {
    padding: 100,
  },
  title: {

  },
  subtitle: {
    color: 'white',

  },
  list: {
      paddingBottom: 100,
      '& > li': {
        paddingLeft: '0px !important',
        paddingBottom: 7,
        color: 'white'
      }
  }
}));

export default function Location() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.content}
        >
          <Grid item xs={4}>
            <Grid container direction="column" alignItems="flex-start" spacing={1}>
              <Grid item>
              <Typography variant="h6" gutterBottom component="div" className={classes.title}>
        РАСПОЛОЖЕНИЕ
      </Typography>
                  </Grid> 
              <Grid item>
              <Typography variant="body2" gutterBottom className={classes.subtitle}>
        На территории комплекса мы создаём атмосферу, 
        вдохновляющую на общение, воспитание детей и здоровый отдых.
      </Typography></Grid> 
              <Grid item>
                  <List className={classes.list}>
                      <ListItem disablePadding>Детские сады</ListItem>
                      <ListItem disablePadding>Школы</ListItem>
                      <ListItem disablePadding>Поликлиники</ListItem>
                      <ListItem disablePadding>Торговый центр</ListItem>
                      <ListItem disablePadding>Общественный транспорт</ListItem>
                  </List>
              </Grid>
              <Grid item>
              <FormAndButton content="Узнать больше" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
{/*               Здесь будет реальная карта, но пока картинка */}    
<img src={Map} alt="Карта" width="700" />         
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
