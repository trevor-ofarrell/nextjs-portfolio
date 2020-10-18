import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { HomeText } from './HomeText'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    height: '28vh',
    marginTop: '15vh',
  },
  termbar: {
    backgroundColor: 'rgba(71, 71, 71);',
    height: '2vh',
  },
  termscreen: {
    backgroundColor: 'rgba(71, 71, 71, 0.5);',
    height: '28vh',
  }
}));

export const HomeSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.termbar}>

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