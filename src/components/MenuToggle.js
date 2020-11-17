import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Path = props => (
  <motion.path
    strokeWidth="2.5"
    stroke="#693aea"
    strokeLinecap="round"
    {...props}
  />
);

const useStyles = makeStyles((theme) => ({
    toggle: {
        top: '4.3em',
        left: '2.3em',
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
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
            </svg>
        </button>
    )
}
