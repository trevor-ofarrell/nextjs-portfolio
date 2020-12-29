import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Path = props => (
  <motion.path
    strokeWidth="2.5"
    strokeLinecap="flat"
    {...props}
  />
);

const useStyles = makeStyles((theme) => ({
    toggle: {
        top: '5.75vh',
        left: '2vw',
        width: '3.6vw',
        height: 'auto',
        [theme.breakpoints.up('xl')]: {
            height: 'auto', 
            width: '5.15em',
            top: '5.15vh',
            left: '1.75vw',
        },
        [theme.breakpoints.down('md')]: {
            width: '5.4em',
            height: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: '4.20em',
            height: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            width: '4em',
            height: 'auto',
            top: '5.5vh',
        },
    },
    svg: {
        width: '25px',
        height: '25px',
    }
  }));

export const MenuToggle = ({ toggle }) => {
    const classes = useStyles()
    return(
        <button onClick={toggle} className={classes.toggle} aria-label="toggle menu">
            <svg width="100%" height="100%" viewBox="0 0 23 23" className="svg">
            <Path
                variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
                }}
                stroke="#000000"

            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                stroke="#000000"
            />
            <Path
                variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
                }}
                stroke="#000000"
            />
            </svg>
        </button>
    )
}
