import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

import Image from 'next/image';
import me from '../../../public/trevorprofilepic.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '98%',
    padding: '2em',
    paddingTop: '5vh',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '1.1em',
      paddingTop: '3.5vh',
    },
  },
  texttitle: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '5vh',
    color: '#000000',
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: '5vh',
      paddingLeft: '2vw',
      paddingTop: '1.1em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vh',
      paddingLeft: '2vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.7vh',
      paddingTop: '0em',
      lineHeight: '4.2vh',
    },
  },
  textbody: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '3vh',
    color: '#000000',
    paddingTop: '1.5em',
    paddingBottom: '2.5vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: '.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.7vh',
    },
  },
  image: {
    padding: '.2em',
    opacity: '0.90',
    borderRadius: '5%',
    pointerEvents: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: '0em',
    },
  },
}));

export const AboutText = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={1} />
      <Grid item xs={4} sm={4} md={3} lg={3}>
        <Image
          src={me}
          alt="Picture of the author"
          width={700}
          height={700}
          className={classes.image}
        />
      </Grid>
      <Grid item xs={8} sm={7} md={8} lg={7}>
        <Typography className={classes.texttitle}>
          Hi, I'm Trevor
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography className={classes.textbody}>
          I’m a Bay Area native who loves to code, play chess, and ride bikes.
          To see my open source projects
          <a href="https://github.com/trevor-ofarrell"> check out my Github</a>
          . To see my tweets (usually about chess, and tech), feel free to
          <a href="https://twitter.com/0xFarrell"> follow me on Twitter</a>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};
