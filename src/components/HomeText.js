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
  text: {
    textAlign: 'left',
    fontFamily: 'Zilla Slab Highlight, cursive',
    fontWeight: '600',
    background: 'linear-gradient(to right, #43c6ac, #f8ffae)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '3em',
    marginLeft: '.5em'
  },
  image: {
    padding: '.2em'
  }
}));

export const HomeText = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Image
                src={me}
                alt="Picture of the author"
                width={600}
                height={600}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={8} lg={9}>
              <Typography className={classes.text}>
                About me
              </Typography>
              <Typography className={classes.text}>

              </Typography>
            </Grid>
        </Grid>
    )
}