import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { makeStyles } from '@material-ui/core/styles';

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
    [theme.breakpoints.down('md')]: {
        marginLeft: '5.6vw',
        paddingTop: '5vh',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '-3vh',
        marginLeft: '3.7vw'
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: '3.15vw',
        marginTop: '13.5vh',
        width: '17vw'
    }
  },
}));

export const Nav = ({changeView, toggleView}) => {
    const classes = useStyles()

    return(
        <motion.ul variants={variants} className={classes.root}>
            {itemIds.map(i => (
            <MenuItem i={i} key={i} changeView={changeView} toggleView={toggleView}/>
            ))}
        </motion.ul>
    )
}
const itemIds = [0, 1, 2, 3, 4];
