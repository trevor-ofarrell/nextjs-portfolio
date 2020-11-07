import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Path = props => (
  <motion.path
    fill="#ea693a"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const useStyles = makeStyles((theme) => ({
    toggle: {
        top: '5em',
        left: '2.5em',
        borderRadius: '50%',
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            maxWidth: '50px',
            maxHeight: '50px',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '60px',
            maxHeight: '60px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '40px',
            maxHeight: '40px',
            top: '3.5em',
            left: '.7em',
        },
    },
    svg: {
        width: '35px',
        height: '35px',
        fill: "#ea693a"
    }
  }));

export const MenuToggle = ({ toggle }) => {
    const classes = useStyles()
    return(
        <button onClick={toggle} className={classes.toggle} aria-label="toggle menu">
            <svg width="100%" height="100%" viewBox="0 0 23 23" fill="%23ea693a" className={classes.svg}>
            <Path
                variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
                }}
                fill="%23ea693a"
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
                fill: "#ea693a",
                }}
                style={{ fill: "#ea693a" }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
                fill: "#ea693a",
                }}
                style={{ fill: "#ea693a" }}
            />
            </svg>
        </button>
    )
}
