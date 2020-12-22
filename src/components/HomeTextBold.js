import React from "react";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

import Typewriter from 'typewriter-effect';

import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Cyber',
    fontWeight: '700',
    fontSize: '7.25em',
    lineHeight: '1.1',
    paddingTop: '12vh',
    paddingBottom: '15vh',
    marginLeft: '3.5vw',
    background: '#000000',
    opacity: 0.98,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      marginLeft: '4vw',
      fontSize: '5em',
    },
    '&:hover': {
      opacity: '1',
    },
  },
  text: {
    textAlign: 'left',
  },
}));

export const HomeTextBold = () => {
    const classes = useStyles();
    return(
      <>
        <div className={classes.root}>
          <Head>
          </Head>
            <Typewriter
                onInit={(typewriter) => {
                    
                    typewriter.typeString("Hello! My name is Trevor O'Farrell, welcome to my website.")
                      .pauseFor(2500)
                      .deleteAll()
                      typewriter.typeString(
                        `I\'m a full stack web developer from the Bay Area, who loves to use 💭 creativity to solve 🧩 problems.`
                      )
                      .pauseFor(1000)
                      .pauseFor(5500)
                      .deleteAll()
                      .pauseFor(100)
                      .start();
                }}
                options={{
                  loop: true,
                  deleteSpeed: 25,
                  delay: 60,
                }}
                className={classes.text}
            />
        </div>
      </>
    )
}