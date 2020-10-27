import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { makeStyles, withStyles } from '@material-ui/core/styles';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
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
    ul: {
        [theme.breakpoints.down('md')]: {
            marginLeft: '5.6vw',
            marginTop: '0vh',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '-3vh',
            marginLeft: '3.7vw'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '6.5vw',
        }
    },
  }));

export const Nav = ({changeView, toggleView}) => {
    const classes = useStyles()

    return(
        <motion.ul variants={variants} className={classes.ul}>
            {itemIds.map(i => (
            <MenuItem i={i} key={i} changeView={changeView} toggleView={toggleView}/>
            ))}
        </motion.ul>
    )
}

const itemIds = [0, 1, 2, 3, 4];
