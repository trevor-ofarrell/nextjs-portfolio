import React, {
  useState,
  useEffect,
  useRef,
} from 'react';

import BIRDS from 'vanta/dist/vanta.birds.min';
import Head from 'next/head';

import {
  CssBaseline,
  Grid,
} from '@material-ui/core';

import Grow from '@material-ui/core/Grow';

import { makeStyles } from '@material-ui/core/styles';

import {
  NavBar,
  Title,
  About,
  Project1,
  Project2,
  Project3,
  Contact,
} from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  contentContainer: {
    height: '100vh',
    width: '100vw',
    zIndex: '3',
  },
  sidebar: {
    zIndex: '10',
  },
  section: {
    height: '100%',
    paddingTop: '24vh',
    scrollBehavior: 'smooth',
    [theme.breakpoints.down('md')]: {
      paddingTop: '24vh',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8vh',
    },
  },
  homesection: {
    height: '100%',
    paddingTop: '24vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: '9vh',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8vh',
    },
    overflow: 'hidden',
  },
  scrolling: {
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100vw',
    height: '100%',
    scrollBehavior: 'smooth',
  },
}));

export default function Birds() {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
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
        backgroundColor: '#222',
        color1: '#000000',
        color2: '#606060',
        birdSize: 3,
        wingSpan: 40.00,
        speedLimit: 4,
        separation: 60.00,
        quantity: 3,
        alignment: 7.00,
        cohesion: 10.00,
        backgroundAlpha: 0.94,
        colorMode: 'variance',
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.birds.min.js" />
      </Head>
      <CssBaseline />
      <a className="skip-link" href="#main">Skip to main</a>
      <main id="main">
        <div className={classes.root} ref={myRef}>
          <div className={classes.sidebar}>
            <NavBar changeView={changeView} toggleView={toggleView} />
          </div>
          <Grid container className={classes.scrolling}>
            <Grid item xs={12} lg={12}>
              <Grid container>
                <Grid item xs={12} lg={12} className={classes.contentContainer}>
                  {changeView === 0
                      && (
                      <>
                        <section className={classes.homesection}>
                          <Grow in={changeView === 0} timeout={600}>
                            <Grid container>
                              <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                              <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                                <Title />
                              </Grid>
                              <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                            </Grid>
                          </Grow>
                        </section>
                      </>
                      )}
                  {changeView === 1
                      && (
                      <>
                        <section className={classes.homesection}>
                          <Grow in={changeView === 1} timeout={600}>
                            <Grid container>
                              <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                              <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                                <About />
                              </Grid>
                              <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                            </Grid>
                          </Grow>
                        </section>
                      </>
                      )}
                  {changeView === 2
                      && (
                      <>
                        <section className={classes.section}>
                          <Grow in={changeView === 2} timeout={600}>
                            <Grid container>
                              <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                              <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                                <Project1 />
                                <Project2 />
                                <Project3 />
                              </Grid>
                              <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                            </Grid>
                          </Grow>
                        </section>
                      </>
                      )}
                  {changeView === 3
                      && (
                      <>
                        <section className={classes.section}>
                          <Grow in={changeView === 3} timeout={600}>
                            <Grid container>
                              <Grid item xs={1} sm={1} md={1} lg={2} />
                              <Grid item xs={10} sm={10} md={10} lg={8}>
                                <Contact />
                              </Grid>
                              <Grid item xs={1} sm={1} md={1} lg={2} />
                            </Grid>
                          </Grow>
                        </section>
                      </>
                      )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}
