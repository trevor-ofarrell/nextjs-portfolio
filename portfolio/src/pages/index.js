import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Head from 'next/head'
import {
  CssBaseline,
  Grid,
  Typography
} from '@material-ui/core';

import Grow from '@material-ui/core/Grow';

import { useSpring, animated } from 'react-spring'

import { makeStyles, withStyles } from '@material-ui/core/styles';

import { SideBar, TerminalCard } from '../components'

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
  sidebar: {
    zIndex: '10',
  },
  section: {
    height: '100vh',
  },
  section2: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '1000',
    fontSize: '7vh'
  },
  scrolling: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: "100vw",
    height: '100%',
  },
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
        backgroundColor: '0x0',
        color1: '#4213C4',
        color2: '#9A13C4',
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
                      <Grow in={changeView == 0} timeout={1000}>
                        <Grid container>
                          <Grid item xs={1} sm={1} md={2} lg={3}/>
                          <Grid item xs={10} sm={10} md={8} lg={6}>
                            <TerminalCard/>
                            <section className={classes.section}>
                              <Typography className={classes.section2}>
                              </Typography>
                            </section>
                          </Grid>
                          <Grid item xs={1} sm={1} md={2} lg={3}/>
                        </Grid>
                      </Grow>
                    </section>                  
                  }
                  {changeView == 1 &&
                  <section className={classes.section}>
                  </section>                      
                  }
                  {changeView == 2 &&
                    <>
                      <section className={classes.section}>
                        <TerminalCard/>
                      </section>
                    </>     
                  }
                  {changeView == 3 &&
                    <section className={classes.section}>
                    hello world 4
                  </section>                      
                  }
                  {changeView == 4 &&
                   <section className={classes.section}>
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