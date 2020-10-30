import React, { useState, useEffect, useRef, useCallback } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Head from 'next/head'
import {
  Box, Button, IconButton, Container, CssBaseline, Grid,
} from '@material-ui/core';

import Grow from '@material-ui/core/Grow';

import { useSpring, animated } from 'react-spring'

import { makeStyles, withStyles } from '@material-ui/core/styles';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { NavBar, HomeSection, SideBar, SpringCard2, SpringCard } from '../components'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    width: "100vw",
    height: '100vh',
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  contentContainer: {
    paddingTop: '20vh',
    marginTop: '4vh',
    height: '80vh',
    width: '100vw',
    zIndex: '3',
    [theme.breakpoints.down('md')]: {
      paddingTop: '8vh'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8vh'
    },
  },
  iconUp: {
    textAlign: 'center',
    color: 'white',
    zIndex: '10'
  },
  box: {
    width: '90%',
    textAlign: 'left',
  },
  space: {
    height: '1vh'
  },
  sidebar: {
    zIndex: '10',
  },
  section: {
    height: '100vh',
  },
  scrolling: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: "100vw",
    height: '100%',
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
  const [changeView, toggleView] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xfffff,
        color1: 0x4300c0,
        color2: 0x505d9,
        colorMode: "lerp",
        birdSize: 0.80,
        wingSpan: 40.00,
        speedLimit: 5.00,
        separation: 11.00,
        alignment: 7.00,
        cohesion: 50.00,
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
          <SideBar changeView={changeView} toggleView={toggleView}/>
        </div>
        <Grid container className={classes.scrolling}>
            <Grid item xs={12} lg={12}>
              <Grid container>
                <Grid item xs={12} lg={12} className={classes.contentContainer}>

                  {changeView == 0 &&
                    <section className={classes.section}>
                        <Grow in={changeView == 0} timeout={2400}>
                          <div>
                            <HomeSection contentStatus={contentStatus} onContentToggle={displayContent}/>
                          </div>
                        </Grow>
                      </section>                  
                  }
                  {changeView == 1 &&
                  <section className={classes.section}>
                    <SpringCard2/>
                  </section>                      
                  }
                  {changeView == 2 &&
                    <section className={classes.section}>
                    hello world 3
                  </section>                      
                  }
                  {changeView == 3 &&
                    <section className={classes.section}>
                    hello world 4
                  </section>                      
                  }
                  {changeView == 4 &&
                   <section className={classes.section}>
                    hello world 5
                   </section>                      
                  }
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </div>
    </>
  )
}