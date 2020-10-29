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
      position: 'absolute',
      top:'0',
      left: '0',
      bottom: '0',
      width: '30vw',
      [theme.breakpoints.down('md')]: {
          width: '50vw'
      },
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
      [theme.breakpoints.down('xs')]: {
        marginLeft: '62vw',
        marginTop: '-4.8em',
      },
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
    >
      <img src={graff} max-height="60" className={classes.title}/>
      <Grid container className={classes.icons}>
        <Grid item xs={2} md={2} lg={4} xl={4}>
          <GitHubIcon fontSize="large"/>
        </Grid>
        <Grid item xs={2} md={2} lg={4} xl={4}>
          <TwitterIcon fontSize="large"/>
        </Grid>
        <Grid item xs={2} md={2} lg={4} xl={4}>
          <InstagramIcon fontSize="large"/>
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
