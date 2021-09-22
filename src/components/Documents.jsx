import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BlueBirds from "../images/blue_birds.png";
import FeedbackImage from "../images/pink_background.png";



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'

  },
    container: {
        borderRight: "1px solid #1f2e58",
        borderLeft: "1px solid #1f2e58",
    },

      content: {
        padding: 100,
      },
 birds: {
   position: 'absolute',
   left: '40%',
   marginTop: 200,

 },
 feedbackImage: {


}


}))

export default function Documents() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

  return (
        <div className={classes.root}>
            <Container className={classes.container}>
            <img src={BlueBirds} alt="Птички на фоне" width="600" className={classes.birds}></img>

      <Grid container spacing={2} className={classes.content}>
        
        <Grid item xs={6} className={classes.documents}>
        <Typography variant="h6" gutterBottom component="div" className={classes.title}>
        ДОКУМЕНТЫ
      </Typography>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      
    >
      <ListItemButton>
        <ListItemIcon>
        <PictureAsPdfIcon/>        </ListItemIcon>
        <ListItemText primary="Разрешение на строительство" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <PictureAsPdfIcon/>     </ListItemIcon>
        <ListItemText primary="Проектная декларация" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <PictureAsPdfIcon/> 
        </ListItemIcon>
        <ListItemText primary="Смотреть все документы" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        </Grid>
        <Grid item xs={6} className={classes.feedback}>

        <img src={FeedbackImage} alt="Отзывы" width="500" className={classes.feedbackImage}></img>
        </Grid>

      </Grid>
      </Container>
      </div>

  );
}