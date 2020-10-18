import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { HomeText } from './HomeText'

import Close from '../../public/windowclose.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    height: '28vh',
    marginTop: '5vh',
    marginLeft: '30vw',
  },
  termbar: {
    backgroundColor: 'rgba(71, 71, 71);',
    height: '2vh',
  },
  termscreen: {
    backgroundColor: 'rgba(71, 71, 71, 0.5);',
    height: '28vh',
  },
  closesvg: {
    margin: '1px',
  }
}));

export const HomeSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.termbar}>
        <img height="90%" src={Close} className={classes.closesvg}/>
      </div>
      <Box className={classes.termscreen}>
        <Grid container>
          <Grid item xs={4} lg={4}>
            <HomeText />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};