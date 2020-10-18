import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Head from 'next/head'
import {
  Box, Button, IconButton, Container, CssBaseline, Grid,
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring'

import { makeStyles, withStyles } from '@material-ui/core/styles';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { NavBar, HomeSection, SideBar } from '../components'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    overflow: 'hidden',
    width: "100vw",
    height: '100vh',
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: '20vh',
    marginTop: '10vh',
    height: '78vh',
    width: '100vw',
    zIndex: '3'
  },
  iconUp: {
    textAlign: 'center',
    color: 'white',
    zIndex: '10'
  },
  box: {
    width: '90%',
    height: '100%',
    textAlign: 'left',
    paddingLeft: '10em'
  },
  space: {
    height: '1vh'
  },
  sidebar: {
    zIndex: '10',
  }
}));

export default function Birds() {
  const classes = useStyles()
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [contentStatus, displayContent] = React.useState(false);
  const contentProps = useSpring({
    opacity: contentStatus ? 1 : 0,
    marginBottom: contentStatus ? 0 : -1000
  })

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0x4300c0,
        color2: 0x505d9,
        colorMode: "lerp",
        birdSize: 0.80,
        wingSpan: 40.00,
        alignment: 7.00,
        cohesion: 75.00,
        backgroundAlpha: 0.94
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return(
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.birds.min.js"></script>
      </Head>
      <CssBaseline />
      <div ref={myRef} className={classes.root}>
        <div className={classes.sidebar}>
          <SideBar/>
        </div>
        <Grid container>
          <Grid item xs={12} lg={12} className={classes.contentContainer}>
            {
            !contentStatus ?
              (
                <div>
                  <Grid container>
                    <Grid item xs={3} lg={6}>
                    </Grid>
                    <Grid item xs={3} lg={9} className={classes.space}/>
                  </Grid>
                </div>
              )
            : (
              <animated.div className={classes.box} style={ contentProps }>
                <HomeSection />
              </animated.div>
              )
            }
          </Grid>
          <Grid item xs={12} lg={12}>
           <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => displayContent(a => !a)}
            >
            <KeyboardArrowUpIcon fontSize="large" className={classes.iconUp}/>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </>
  )
}