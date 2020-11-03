import React, { useCallback } from "react";
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
    marginBottom: '5.1vh',
    '&:hover': {
      color: '#3AEA69',
      boxShadow: '0 0 20px 8px #3AEA69',
      MozTransition: 'all 0.01s ease-in',
      OTransition: 'all 0.01s ease-in',
      WebkitTransition: 'all 0.01s ease-in',
      transition: 'all 0.01s ease-in',
    }
  },
  menuText: {
    float: 'left',
    fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
    paddingTop: '.45em',
    fontSize: '2.4em',
    color: '#39FF14',
    fontWeight: '600',
    pointerEvents: 'none',
  },
  icons: {
    paddingTop: '1em'
  },
  textPlaceholder: {
    height: '75px',
    flex: '1',
  },
  menuIcon: {
    color: '#39FF14',
    marginTop: '5px',
    paddingLeft: '.1em'
  }
}));

const colors = ["rgb(255, 140, 224, 0.6)", "rgb(234, 58, 187, 0.60)", "rgb(156, 26, 255, 0.6)", "rgb(119, 0, 255, 0.6)", "rgb(68, 0, 255, 0.7)"];
const titles = ["home", "about me", "projects", "blog", "contact"]

export const MenuItem = ({ changeView, toggleView, i }) => {
  const classes = useStyles()
  const style = { backgroundColor: `${colors[i]}` };
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
      href={`/${titles[i]}`}
      onClick={handleToggle}
      className={classes.root}
    >

      <Grid container className={classes.textPlaceholder} style={style}>
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
