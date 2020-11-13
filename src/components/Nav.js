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
    [theme.breakpoints.up('lg')]: {
      marginLeft: '1.4vw',
      marginTop: '13.5vh',
      width: '17vw',
      minWidth: '17em',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '5.6vw',
      paddingTop: '5vh',
      width: '40vw',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.25vh',
      marginLeft: '5.5vw',
      width: '50vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1.25vh',
      marginLeft: '3.5vw',
      width: '60vw',
    },
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
