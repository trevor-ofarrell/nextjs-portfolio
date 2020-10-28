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

import { NavBar, HomeSection, SideBar } from '../components'
import { dark } from '@material-ui/core/styles/createPalette';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const useStyles = makeStyles(() => ({
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
    marginTop: '2vh',
    height: '80vh',
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

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

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
  const [colorMode, toggleColor] = useState({checked: false});
  const [tog, setTog] = useState(false)
  const toggle = React.useCallback(() => setTog(!tog));
  const handleChange = (event) => {
    toggleColor({ ...colorMode, [event.target.name]: event.target.checked });
    toggle()
  };
  let darkmode = 0xfffff

  useEffect(() => {
    console.log(darkmode)
    if (tog === true) {
      darkmode = 0x0
    }
    else {
      darkmode = 0xfffff
    }
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: darkmode,
        color1: 0x4300c0,
        color2: 0x505d9,
        colorMode: "lerp",
        birdSize: 0.80,
        wingSpan: 40.00,
        speedLimit: 5.00,
        separation: 11.00,
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
                    hello world 2
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