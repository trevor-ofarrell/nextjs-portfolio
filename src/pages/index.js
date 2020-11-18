import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Head from 'next/head'
import {
  CssBaseline,
  Grid,
} from '@material-ui/core';

import Grow from '@material-ui/core/Grow';

import { makeStyles } from '@material-ui/core/styles';

import { SideBar, Title, About, Project1, Project2, Project3, Project4 } from '../components'

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
    paddingTop: '26vh',
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
    height: '70vh',
  },
  section2: {
    fontFamily: '"HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold", "HelveticaNeue", "Helvetica Neue", "Helvetica", "TeXGyreHerosCnBold", "Helvetica", "Tahoma", "Geneva", "Arial Narrow", "Arial", sans-serif',
    color: '#E660FF',
    fontWeight: '900',
    fontSize: '6em',
    lineHeight: '1.2',
    paddingTop: '30vh',
    textAlign: 'left',
    margin: '2em'
  },
  scrolling: {
    overflowY: 'auto',
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
        backgroundColor: '#120458',
        color1: '#7a04eb',
        color2: '#ff124f',
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
                    <>
                      <section className={classes.section}>
                        <Grow in={changeView == 0} timeout={600}>
                          <Grid container>
                            <Grid item xs={1} sm={2} md={2} lg={2}/>
                            <Grid item xs={10} sm={8} md={8} lg={8}>
                              <Title/>
                            </Grid>
                            <Grid item xs={1} sm={2} md={2} lg={2}/>
                          </Grid>
                        </Grow>
                      </section>
                    </>  
                  }
                  {changeView == 1 &&
                    <>
                     <section className={classes.section}>
                       <Grow in={changeView == 1} timeout={800}>
                         <Grid container>
                           <Grid item xs={1} sm={1} md={1} lg={2}/>
                           <Grid item xs={10} sm={10} md={10} lg={8}>
                             <About/>
                           </Grid>
                           <Grid item xs={1} sm={1} md={1} lg={2}/>
                         </Grid>
                       </Grow>
                     </section>
                   </>  
                  }
                  {changeView == 2 &&
                    <>
                      <section className={classes.section}>
                        <Grow in={changeView == 2} timeout={600}>
                          <Grid container>
                            <Grid item xs={1} sm={1} md={1} lg={2}/>
                            <Grid item xs={10} sm={10} md={10} lg={8}>
                              <Project1/>
                              <Project2/>
                              <Project3/>
                              <Project4/>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={2}/>
                          </Grid>
                        </Grow>
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