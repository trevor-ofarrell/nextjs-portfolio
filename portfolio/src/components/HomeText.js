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
    color: '#39FF14',
    fontSize: '1.7em',
    width: '95%',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    fontWeight: '600',
    marginLeft: '.2em',
    marginBottom: '40%'
  },
  text: {
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
                    typewriter.typeString(' ')
                      .deleteAll()
                      .changeDelay(75)
                      .pauseFor(500)
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
                  deleteSpeed: .0001,
                }}
                className={classes.text}
            />
        </div>
    )
}