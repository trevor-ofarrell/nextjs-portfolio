import React, { useCallback } from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";

import { TerminalCard } from './TerminalCard'


const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  blur: {
    backgroundColor: 'rgb(70, 70, 70, .7)',
    width: '70vw',
    height: '60vh',
  }
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={12}>
            <TerminalCard/>
        </Grid>
      </Grid>
    </div>
  );
};