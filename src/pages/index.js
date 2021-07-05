import React, {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  CssBaseline,
  Grid,
  Hidden,
  createMuiTheme,
  Slide,
} from '@material-ui/core';

import Grow from '@material-ui/core/Grow';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import {
  NavBar,
  Title,
  MobileNav,
  About,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Contact,
} from '../components';

const customBreakpoints = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 675,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    backgroundColor: '#454545',
  },
  contentContainer: {
    height: '100vh',
    width: '100vw',
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
  const [changeView, toggleView] = useState(0);


  return (
    <>
      <CssBaseline />
      <a className="skip-link" href="#main">Skip to main</a>
      <main id="main">
        <ThemeProvider theme={customBreakpoints}>
          <div className={classes.root}>
            <div className={classes.sidebar}>
              <Hidden xsDown>
                <NavBar changeView={changeView} toggleView={toggleView} />
              </Hidden>
              <Hidden smUp>
                <MobileNav changeView={changeView} toggleView={toggleView} />
              </Hidden>
            </div>
            <Grid container className={classes.scrolling}>
              <Grid item xs={12} lg={12}>
                <Grid container>
                  <Grid item xs={12} lg={12} className={classes.contentContainer}>
                    {changeView === 0
                        && (
                        <>
                          <section className={classes.homesection}>
                            <Slide in={changeView === 0} direction="left" timeout={350}>
                              <Grid container>
                                <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                                <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                                  <Title />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                              </Grid>
                            </Slide>
                          </section>
                        </>
                        )}
                    {changeView === 1
                        && (
                        <>
                          <section className={classes.homesection}>
                            <Slide in={changeView === 1} direction="left" timeout={350}>
                              <Grid container>
                                <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                                <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                                  <About />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                              </Grid>
                            </Slide>
                          </section>
                        </>
                        )}
                    {changeView === 2
                        && (
                        <>
                          <section className={classes.section}>
                            <Slide in={changeView === 2} direction="left" timeout={350}>
                              <Grid container>
                                <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                                <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
                                  <Project1 />
                                  <Project2 />
                                  <Project3 />
                                  <Project4 />
                                  <Project5 />
                                  <Project6 />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={2} xl={3} />
                              </Grid>
                            </Slide>
                          </section>
                        </>
                        )}
                    {changeView === 3
                        && (
                        <>
                          <section className={classes.section}>
                            <Slide in={changeView === 3} direction="left" timeout={350}>
                              <Grid container>
                                <Grid item xs={1} sm={1} md={1} lg={2} />
                                <Grid item xs={10} sm={10} md={10} lg={8}>
                                  <Contact />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={2} />
                              </Grid>
                            </Slide>
                          </section>
                        </>
                        )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
      </main>
    </>
  );
}
