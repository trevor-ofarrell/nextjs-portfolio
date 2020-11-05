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
    fontFamily: '"HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold", "HelveticaNeue", "Helvetica Neue", "Helvetica", "TeXGyreHerosCnBold", "Helvetica", "Tahoma", "Geneva", "Arial Narrow", "Arial", sans-serif',
    color: '#E660FF',
    fontWeight: '900',
    fontSize: '6em',
    lineHeight: '1.2',
    marginLeft: '.2em',
    marginBottom: '40%',
    textShadow: '0px 0px 30px #E660FF',
  },
  text: {
    textAlign: 'left',
  },
}));

export const HomeTextBold = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
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