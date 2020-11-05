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
    marginBottom: '4vh',
  },
  menuText: {
    float: 'left',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    paddingTop: '1.7vh',
    fontSize: '3.6vh',
    color: '#39FF14',
    fontWeight: '600',
    pointerEvents: 'none',
  },
  icons: {
    paddingTop: '2.3vh'
  },
  textPlaceholder: {
    height: '8vh',
    flex: '1',
  },
  menuIcon: {
    color: '#39FF14',
  }
}));

const colors = ["rgb(255, 140, 224, 0.65)", "rgb(234, 58, 187, 0.65)", "rgb(156, 26, 255, 0.65)", "rgb(119, 0, 255, 0.65)", "rgb(68, 0, 255, 0.65)"];
const titles = ["home", "about me", "projects", "blog", "contact"]

export const MenuItem = ({ changeView, toggleView, i }) => {
  const classes = useStyles()
  const [onHover, Hovered] = useState(false);
  const style = { 
    backgroundColor: `${colors[i]}`,
    boxShadow: onHover === true ? '0 0 20px 8px #39FF14' : `0 0 20px 11px ${colors[i]}`,
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
