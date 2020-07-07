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
    backgroundColor: 'rgba(255, 0, 0, 0.5);',
    width: '50%',
    height: '28vh',
  },

}));

export const HomeSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={4} lg={4}>
          <HomeText />
        </Grid>
      </Grid>
    </Box>
  );
};