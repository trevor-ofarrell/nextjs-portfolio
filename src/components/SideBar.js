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
import graff from '../../public/pinkdrip.png'
import { Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';

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
      marginLeft: '7.3em',
      [theme.breakpoints.down('xs')]: {
        height: '9vh',
        width: '45vw',
        marginLeft: '0em',
      },
    },
    items: {
      marginTop: '4vh',
    },
    icons: {
      marginLeft: '79vw',
      marginTop: '-6em',
      fill: '#59fee8',
      [theme.breakpoints.down('sm')]: {
        paddingRight: '5vw'
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '62vw',
        marginTop: '-4.8em',
      }
    },
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
      <Image
        src={graff}
        alt="Trevor O'Farrell"
        className={classes.title}
        width={550}
        height={200}
        loading="eager"
      />
      <Grid container className={classes.icons}>
        <Grid item xs={2} sm={2} md={2} lg={4} xl={4}>
          <a href="https://github.com/trevor-ofarrell" aria-label="github link">
            <GitHubIcon fontSize="large" style={{ fill: '#693aea' }} className={classes.icon}/>
          </a>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={4} xl={4}>
          <a href="https://twitter.com/trevorthegnar" aria-label="twitter link">
            <TwitterIcon fontSize="large" style={{ fill: '#693aea' }} className={classes.icon}/>
          </a>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={4} xl={4}>
          <a href="https://instagram.com/trevorthegnar" aria-label="instagram link">
            <InstagramIcon fontSize="large"  style={{ fill: '#693aea' }} className={classes.icon}/>
          </a>
        </Grid>
      </Grid>
      <motion.div className={classes.root} variants={sidebar} />
      <div className={classes.items} style={{pointerEvents: isOpen ? 'all' : 'none'}}>
        <Nav changeView={changeView} toggleView={toggleView}/>
      </div>
      <div>
        <MenuToggle toggle={() => toggleOpen()}/>
      </div>
    </motion.nav>
  );
};