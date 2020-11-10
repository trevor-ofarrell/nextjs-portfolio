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
    fontFamily: 'Zilla Slab Highlight, cursive',
    fontWeight: '900',
    fontSize: '5.4em',
    lineHeight: '1.1',
    paddingTop: '20vh',
    marginTop: '-20vh',
    paddingBottom: '20vh',
    background: 'linear-gradient(to right, #7f00ff, #e100ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&:hover': {
      color: 'rgb(0, 0, 0, 1)',
    },
  },
  text: {
    textAlign: 'left',

  },
}));

export const HomeTextBold = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <Head>
          </Head>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(' ')
                      .deleteAll()
                      .changeDelay(75)
                      .pauseFor(500)
                    typewriter.typeString("Hello! My name is Trevor O'Farrell, welcome to my website.")
                      .pauseFor(2500)
                      .deleteAll()
                      typewriter.typeString(
                        `I\'m a Software Engineer 💻🛠 from the Bay Area, who loves to use 💭 creativity to solve 🧩 problems.`
                      )
                      .pauseFor(1000)
                      .pauseFor(5500)
                      .deleteAll()
                      .pauseFor(100)
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