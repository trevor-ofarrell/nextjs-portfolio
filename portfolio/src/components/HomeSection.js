import React, { useCallback } from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";

import { HomeText } from './HomeText'
import Close from '../../public/windowclose.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
    marginLeft: '20.5vw',
    width: '60vw',
    textAlign: 'left',
    overflow: 'hidden',
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
    height: '2.3vh',
  },
  termscreen: {
    backgroundColor: 'rgba(71, 71, 71, 0.45);',
    height: '60vh',
  },
  closesvg: {
  },
  button: {
    height: '2vh',
    width: '2vw',
    marginLeft: '-.5vw',
    marginTop: '2px'
  },
  divider: {
    color: 'white'
  },
  termfont: {
    color: '#39FF14',
    fontSize: '1.2em',
    width: '95%',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    fontWeight: '600',
  }
}));

export const HomeSection = ({content, onContentToggle}) => {
  const classes = useStyles();
  const handleToggle = useCallback(event => {
    onContentToggle(event.target.value)
  }, [onContentToggle])

  return (
    <div className={classes.root}>
      <Grid container className={classes.termbar}>
        <Grid itwm xs={1} lg={1}>
          <button onClick={onContentToggle} value={content} className={classes.button}>
            <img height="90%" src={Close} className={classes.closesvg}/>
          </button>
        </Grid>
      </Grid>
      <Box className={classes.termscreen}>
        <Grid container>
          <Grid item xs={4} lg={12}>
            <HomeText/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};