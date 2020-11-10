import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import Head from 'next/head'
import me from '../../public/trevorprofilepic.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    padding: '1em'
  },
  texttitle: {
    textAlign: 'center',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    fontWeight: '600',
    fontSize: '7vh',
    color: '#39FF14'
  },
  textbody: {
    textAlign: 'center',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    fontWeight: '600',
    fontSize: '2.5vh',
    color: '#39FF14'
  },
  image: {
    padding: '.2em',
    opacity: '0.75',
    borderRadius: '50%',
  }
}));

export const HomeText = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item xs={4} sm={4} md={3} lg={3}>
              <Image
                src={me}
                alt="Picture of the author"
                width={700}
                height={700}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={8} sm={8} md={9} lg={9}>
              <Typography className={classes.texttitle}>
                About
              </Typography>
              <Typography className={classes.textbody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
        </Grid>
    )
}