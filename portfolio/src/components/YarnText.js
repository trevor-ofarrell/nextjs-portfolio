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
    fontSize: '1.2em',
    width: '90%',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    fontWeight: '600',
    marginLeft: '.2em',
    marginBottom: '35%',
  },
  text: {
    textAlign: 'left',
  },
}));

export const YarnText = () => {
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
                      .changeDelay(1)
                    typewriter.typeString(`
                      yarn install v1.22.5
                      [1/4] 🔍  Resolving packages...
                      success Packages already up-to-date.
                       ✨ Done in 0.49s.
                    `)
                    .start()
                }}
                options={{
                  deleteSpeed: .0001,
                }}
                className={classes.text}
            />
        </div>
    )
}