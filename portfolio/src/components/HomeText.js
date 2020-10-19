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
    width: '300%',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
  },
  text: {
    color: 'white',
    margin: '3em',
    paddingLeft: '-1em',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    textAlign: 'left',
  },
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
                    typewriter.typeString("Hi I\'m <strong>Trevor</strong>! Welcome to my website.")
                    .pauseFor(2500)
                    .deleteAll()
                    typewriter.typeString(
                      'I\'m a <strong>S</strong>oft<strong>w</strong>are <strong>E</strong>ngineer from the <strong>Bay</strong> area interested in <strong>web dev</strong>elopment.')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                }}
                className={classes.text}
            />
        </div>
    )
}