import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Nav } from "./Nav";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import graff from '../../public/pinkdrip.png'

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
        marginLeft: '7.3em'
    },
    items: {
        marginTop: '4vh',
    },
    hamburger: {
      marginTop: '2em'
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
      <img src={graff} max-height="85vh" className={classes.title}/>
      <motion.div className={classes.root} variants={sidebar} />
      <div className={classes.items} style={{pointerEvents: isOpen ? 'all' : 'none'}}>
        <Nav changeView={changeView} toggleView={toggleView}/>
      </div>
      <div className={classes.hamburger}>
        <MenuToggle toggle={() => toggleOpen()}/>
      </div>
    </motion.nav>
  );
};
