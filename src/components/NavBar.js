import React, { useState, useRef } from 'react';

import { motion } from 'framer-motion';
import {
  makeStyles, Toolbar, AppBar, Grid, ClickAwayListener,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Nav } from './Nav';
import { MenuToggle } from './MenuToggle';
import { useDimensions } from './use-dimensions';
import graff from '../../public/blackname.png';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: '0',
    height: '0vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginTop: '1vh',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    color: 'white',
    textAlign: 'left',
    [theme.breakpoints.up('xl')]: {

    },
    [theme.breakpoints.down('md')]: {
    },
    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      paddingRight: '.5em',
    },
  },
  menubutton: {
    marginTop: '0em',
    top: '0',
  },
  icons: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fill: '#000000',
  },
  icon: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5em',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2.5vh',
      fontSize: '2.5em',
    },
  },
}));

export const NavBar = ({ toggleView, changeView }) => {
  const classes = useStyles();

  const [isOpen, toggleOpen] = useState(false);

  const containerRef = useRef(null);

  const { height } = useDimensions(containerRef);

  const handleClick = () => {
    toggleOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    toggleOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Grid container>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <motion.nav
                  initial={false}
                  animate={isOpen ? 'open' : 'closed'}
                  custom={height}
                  ref={containerRef}
                >
                  <motion.div variants={sidebar} />
                  <div style={{ pointerEvents: isOpen ? 'all' : 'none' }}>
                    <Nav toggleView={toggleView} toggle={handleClick} />
                  </div>
                  <div>
                    <MenuToggle toggle={() => handleClick()} />

                  </div>
                </motion.nav>
              </Grid>
              <Grid item xs={7} sm={8} md={8} lg={8} xl={8}>
                <img src={graff} height="auto" alt="Trevor O'Farrell" className={classes.title} />
              </Grid>
              <Grid item lg={1} xl={1} />
              <Grid item xs={3} sm={2} md={2} lg={1} xl={1} className={classes.icons}>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <a href="https://github.com/trevor-ofarrell" aria-label="github link">
                      <GitHubIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon} />
                    </a>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <a href="https://twitter.com/trevorthegnar" aria-label="twitter link">
                      <TwitterIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon} />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

      </div>
    </ClickAwayListener>
  );
};
