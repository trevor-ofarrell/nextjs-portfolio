import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Nav } from "./Nav";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import graff from '../../public/blackname.png'
import { Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

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
      paddingTop: '2vh'
    },
    title: {
      margin: '.7em',
      pointerEvents: 'none',
      marginLeft: '8.3em',
      height: '10vh',
      width: '32vw',
      [theme.breakpoints.up('xl')]: {
        height: '8vh',
        width: '18vw',
      },
      [theme.breakpoints.down('xs')]: {
        height: '8.2vh',
        width: '41vw',
        marginLeft: '0em',
      },
    },
    items: {
      marginTop: '4vh',
      [theme.breakpoints.down('md')]: {
        marginTop: '-8vh',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '5vh',
      },
    },
    icons: {
      marginLeft: '79vw',
      marginTop: '-6.6em',
      fill: '#000000',
      [theme.breakpoints.up('xl')]: {
        marginLeft: '88vw',
      },
      [theme.breakpoints.down('lg')]: {
        marginLeft: '77vw',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '72vw',
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '62vw',
        marginTop: '-4.8em',
        fontSize: '0.8em'
      }
    },
    icon: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '2.4em'
      }
    }
  }));

export const SideBar = ({changeView, toggleView}) => {
  const classes = useStyles()
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={classes.root}
    >
      <img src={graff} max-height="70"  alt="Trevor O'Farrell" className={classes.title}/>
  
      <Grid container className={classes.icons}>
        <Grid item xs={2} sm={2} md={2} lg={4} xl={4}>
          <a href="https://github.com/trevor-ofarrell" aria-label="github link">
            <GitHubIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon}/>
          </a>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={4} xl={4}>
          <a href="https://twitter.com/trevorthegnar" aria-label="twitter link">
            <TwitterIcon fontSize="large" style={{ fill: '#000000' }} className={classes.icon}/>
          </a>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={4} xl={4}>
          <a href="https://instagram.com/trevorthegnar" aria-label="instagram link">
            <InstagramIcon fontSize="large"  style={{ fill: '#000000' }} className={classes.icon}/>
          </a>
        </Grid>
      </Grid>
      <motion.div className={classes.root} variants={sidebar} />
      <div className={classes.items} style={{pointerEvents: isOpen ? 'all' : 'none'}}>
        <Nav toggleView={toggleView}/>
      </div>
      <div>
        <MenuToggle toggle={() => toggleOpen()}/>
      </div>
    </motion.nav>
  );
};
