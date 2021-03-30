import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Grid, Hidden, makeStyles, withStyles,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import MessageIcon from '@material-ui/icons/Message';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)',
    WebkitClipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)',
    marginBottom: '2em',
    listStyle: 'none',
    height: '8em',
  },
  textPlaceholder: {
    flex: '1',
    marginLeft: '1vw',
  },
  menuText: {
    paddingTop: '1.6vh',
    fontWeight: '600',
    pointerEvents: 'none',
    textAlign: 'left',
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.3em',
      paddingTop: '2vh',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '2vh',
      fontSize: '1.6em',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1.6vh',
      fontSize: '1.3em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1.5vh',
      fontSize: '1.1em',
    },
  },
  icons: {
    paddingTop: '2.5vh',
  },

  menuIcon: {
    color: '#00000',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5em',
    },
  },
}));

const colors = [
  '#000000',
  '#000000',
  '#000000',
  '#000000',
];
const titles = ['home', 'about me', 'portfolio', 'contact'];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const MenuItem = ({ toggleView, i, toggle }) => {
  const classes = useStyles();
  const [onHover, Hovered] = useState(false);
  const style = {
    background: `${colors[i]}`,
    MozTransition: 'all 0.01s ease-in',
    OTransition: 'all 0.01s ease-in',
    WebkitTransition: 'all 0.01s ease-in',
    transition: 'all 0.01s ease-in',
  };

  const handleToggle = useCallback((event) => {
    toggleView(i);
  }, [toggleView, i]);

  const handleToggleMobile = useCallback(async (event) => {
    toggleView(i);
    await delay(650).then(() => {
      toggle();
    });
  }, [toggleView, i, toggle]);

  const icons = [
    <HomeIcon key="homeicon" fontSize="large" className={classes.menuIcon} />,
    <InfoIcon key="infoicon" fontSize="large" className={classes.menuIcon} />,
    <CodeIcon key="codeicon" fontSize="large" className={classes.menuIcon} />,
    <MessageIcon key="messageicon" fontSize="large" className={classes.menuIcon} />,
  ];

  return (
    <>
      <Hidden mdDown>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleToggle}
          onMouseEnter={() => Hovered(true)}
          onMouseLeave={() => Hovered(false)}
          className={classes.root}
        >
          <button type="button" className="cybr-btn" style={style}>
            <Grid container className={classes.textPlaceholder}>
              <Grid item xs={3} sm={3} md={3} lg={3} className={classes.icons}>
                {icons[i]}
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} className={classes.menuText}>
                {titles[i]}
              </Grid>
            </Grid>
            <span aria-hidden />
            <span aria-hidden className="cybr-btn__glitch">
              {icons[i]}
              {titles[i]}
            </span>
          </button>
        </motion.li>
      </Hidden>
      <Hidden lgUp>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleToggleMobile}
          onMouseEnter={() => Hovered(true)}
          onMouseLeave={() => Hovered(false)}
          className={classes.root}
        >
          <button type="button" className="cybr-btn" style={style}>
            <Grid container className={classes.textPlaceholder}>
              <Grid item xs={3} sm={3} md={3} lg={3} className={classes.icons}>
                {icons[i]}
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={9} className={classes.menuText}>
                {titles[i]}
              </Grid>
            </Grid>
            <span aria-hidden />
            <span aria-hidden className="cybr-btn__glitch">
              {icons[i]}
              {titles[i]}
            </span>
          </button>
        </motion.li>
      </Hidden>
    </>
  );
};
