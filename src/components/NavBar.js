import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Nav } from "./Nav";
import { makeStyles, withStyles, Typography, Toolbar, AppBar } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import graff from '../../public/blackname.png'
import { Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
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
    marginLeft: '5vw',
    marginTop: '2.5vh',
    pointerEvents: 'none',
    height: '10vh',
    width: '29vw',
    [theme.breakpoints.up('xl')]: {
      marginLeft: '4vw',
      height: '9vh',
      width: '22vw',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '7vw',
      width: '40vw',
    },
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
      width: '42vw',
    },
    [theme.breakpoints.down('xs')]: {
      height: '8.2vh',
      width: '45vw',
      marginLeft: '7vw',
    },
  },

  icons: {
    marginTop: '3vh',
    fill: '#000000',
    [theme.breakpoints.up('xl')]: {
    },
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('xs')]: {
    }
  },
  icon: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5em',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '4em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.4em'
    },
  }
}));

export const NavBar = ({changeView, toggleView}) => {
  const classes = useStyles();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <img src={graff} max-height="70"  alt="Trevor O'Farrell"  className={classes.title}/>
          <Grid container>
            <Grid item xs={3} sm={6} md={6} lg={9} xl={9}>
            </Grid>
            <Grid item xs={8} sm={6} md={6} lg={3} xl={3} className={classes.icons}>
              <Grid container >
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href="https://github.com/trevor-ofarrell" aria-label="github link">
                    <GitHubIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon}/>
                  </a>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href="https://twitter.com/trevorthegnar" aria-label="twitter link">
                    <TwitterIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon}/>
                  </a>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <a href="https://instagram.com/trevorthegnar" aria-label="instagram link">
                    <InstagramIcon fontSize="large"  style={{ fill: '#000000' }} className={classes.icon}/>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>          
        </Toolbar>
      </AppBar>
      <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={classes.root}
      >
        <motion.div className={classes.root} variants={sidebar} />
          <div className={classes.items} style={{pointerEvents: isOpen ? 'all' : 'none'}}>
            <Nav toggleView={toggleView} toggle={() => toggleOpen()}/>
          </div>
          <div>
            <MenuToggle toggle={() => toggleOpen()}/>
          </div>
      </motion.nav>
    </div>
  );
}