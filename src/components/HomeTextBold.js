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
    fontFamily: 'Montserrat, sans-serif',
    color: 'rgb(234, 58, 187, 0.8)',
    fontWeight: '900',
    fontSize: '5.3em',
    lineHeight: '1.1',
    paddingTop: '20vh',
    marginTop: '-20vh',
    paddingBottom: '20vh',
    textShadow: '0px 0px 22px rgb(234, 58, 187, 0.8)',
    '&:hover': {
        color: 'rgb(234, 58, 187, 0.9)',
        textShadow: '0px 0px 30px rgb(234, 58, 187, 1)',
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
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(' ')
                      .deleteAll()
                      .changeDelay(75)
                      .pauseFor(500)
                    typewriter.typeString("✨Hello✨! My name is Trevor O'Farrell, welcome to my website.")
                      .pauseFor(2500)
                      .deleteAll()
                      typewriter.typeString(
                        `I\'m a Software Engineer 💻🛠 from the Bay Area, who loves to use 💭creativity to solve 🧩problems. Some things that intrest me the most are motion➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ , user experience, and design.`
                      )
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