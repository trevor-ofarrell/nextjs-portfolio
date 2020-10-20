import React, { useCallback } from "react";
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
    height: '28vh',
    marginTop: '14vh',
    marginLeft: '30vw',
    width: '35%',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      marginTop: '18vh',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      height: '48vh',
      marginLeft: '10vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '55vh',
      marginLeft: '1vw',
    },
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
    margin: '.5px',
  },
  button: {
    height: '2vh',
    marginLeft: '-.5vw',
  }
}));

export const HomeSection = ({content, onContentToggle}) => {
  const classes = useStyles();
  const handleToggle = useCallback(event => {
    onContentToggle(event.target.value)
  }, [onContentToggle])

  return (
    <div className={classes.root}>
      <div className={classes.termbar}>
        <button onClick={onContentToggle} value={content} className={classes.button}>
          <img height="90%" src={Close} className={classes.closesvg}/>
        </button>
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