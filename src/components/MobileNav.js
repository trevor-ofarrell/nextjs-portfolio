import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, ClickAwayListener } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import { MenuToggle, Nav } from '.';
import { useDimensions } from './use-dimensions';
import graff from '../../public/blackname.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '0vh',
  },
  menuButton: {
    marginTop: '1vh',
    marginRight: theme.spacing(0),
  },
  title: {
    marginTop: '0.5vh',
    cursor: 'pointer',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    color: 'white',
    width: '48vw',
    height: '100%',
  },
  icons: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fill: '#000000',
  },
  icon: {
    marginTop: '2.5vh',
    fontSize: '2.3em',
  },
}));

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

export const MobileNav = ({ toggleView }) => {
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
            </motion.nav>
            <div>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon fontSize="large" onClick={() => handleClick()} />
              </IconButton>
            </div>
            <Grid container>
              <Grid item xs={8}>
                <img src={graff} alt="Trevor O'Farrell" className={classes.title} />
              </Grid>
              <Grid item xs={2}>
                <a href="https://github.com/trevor-ofarrell" aria-label="github link">
                  <GitHubIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon} />
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="https://twitter.com/trevorthegnar" aria-label="twitter link">
                  <TwitterIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon} />
                </a>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </ClickAwayListener>
  );
};
