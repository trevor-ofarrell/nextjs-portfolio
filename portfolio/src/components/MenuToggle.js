import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

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
        zIndex: '10'
    },
    toggle: {
        top: '3em',
        left: '2.5em',
        width: '60px',
        height: '60px',
        maxWidth: '60px',
        maxHeight: '60px',
        borderRadius: '50%',
        backgroundColor: 0x4300c0,
        position: 'absolute'
    },
    svg: {
        width: '35',
        height: '35'
    }
  }));

export const MenuToggle = ({ toggle }) => {
    const classes = useStyles()
    return(
        <button onClick={toggle} className={classes.toggle}>
            <svg width="100%" height="100%" viewBox="0 0 23 23" className={classes.svg}>
            <Path
                variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
            </svg>
        </button>
    )
}
