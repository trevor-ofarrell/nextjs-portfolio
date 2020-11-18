import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Typography, Grid } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CodeIcon from '@material-ui/icons/Code';
import MessageIcon from '@material-ui/icons/Message';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '3vh',
    listStyle: 'none',
    height: '10.4vh',
    borderRadius: '1.5px'
  },
  menuText: {
    float: 'left',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    paddingTop: '3.4vh',
    fontSize: '3.2vh',
    color: '#ff124f',
    textShadow: '-2px 2px #120458',
    fontWeight: '600',
    pointerEvents: 'none',
  },
  icons: {
    paddingTop: '3.8vh'
  },
  textPlaceholder: {
    flex: '1',
  },
  menuIcon: {
    color: '#ff124f',
  }
}));

const colors = [
  "linear-gradient(to right, rgb(122, 4, 235, 0.9), rgb(122, 4, 235, .4), rgb(127, 0, 255, 0))",
  "linear-gradient(to right, rgb(122, 4, 235, .9), rgb(122, 4, 235, .4), rgb(127, 0, 255, 0))",
  "linear-gradient(to right, rgb(122, 4, 235, .9), rgb(122, 4, 235, .4), rgb(127, 0, 255, 0))",
  "linear-gradient(to right, rgb(122, 4, 235, .9), rgb(122, 4, 235, .4), rgb(127, 0, 255, 0))",
  "linear-gradient(to right, rgb(122, 4, 235, .9), rgb(122, 4, 235, .4), rgb(127, 0, 255, 0))",
];
const titles = ["home", "about me", "portfolio", "blog", "contact"]

export const MenuItem = ({ changeView, toggleView, i }) => {
  const classes = useStyles()
  const [onHover, Hovered] = useState(false);
  const style = { 
    background: `${colors[i]}`,
    MozTransition: 'all 0.01s ease-in',
    OTransition: 'all 0.01s ease-in',
    WebkitTransition: 'all 0.01s ease-in',
    transition: 'all 0.01s ease-in',
  }
  const handleToggle = useCallback(event => {
    toggleView(i)
  }, [toggleView])
  const icons = [
    <HomeIcon fontSize="large" className={classes.menuIcon}/>,
    <InfoIcon fontSize="large" className={classes.menuIcon}/>,
    <CodeIcon fontSize="large" className={classes.menuIcon}/>,
    <LaptopMacIcon fontSize="large" className={classes.menuIcon}/>,
    <MessageIcon fontSize="large" className={classes.menuIcon}/>
  ]

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.10 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleToggle}
      onMouseEnter={() => Hovered(true)}
      onMouseLeave={() => Hovered(false)}
      className={classes.root}
      style={style}
    >
      <Grid container className={classes.textPlaceholder}>
        <Grid item xs={3} sm={3} md={3} lg={3} className={classes.icons}>
          {icons[i]}
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={9}>
          <Typography variant="h5" color="secondary" className={classes.menuText}>
              {titles[i]}
          </Typography>
        </Grid>
      </Grid>
    </motion.li>
  );
};
