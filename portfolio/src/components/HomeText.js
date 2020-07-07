import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Typewriter from 'typewriter-effect';

import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    fontSize: '1.5em',
    width: '100%'
  },
  text: {
    color: 'white',
    margin: '3em',
    paddingLeft: '-1em',
    fontFamily: 'Tomorrow, sans-serif',
    textAlign: 'left',
  }
}));


export const HomeText = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Tomorrow&display=swap" rel="stylesheet" /> 
            </Head>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hi I\m Trevor! Welcome to my website.')
                    .pauseFor(500)
                    .deleteAll()
                    typewriter.typeString('I\'m a Software Engineer from the bay area interested in web development.')
                    .deleteAll()
                    .start();
                }}
                className={classes.text}
            />
        </div>
    )
}