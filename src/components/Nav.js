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
      marginLeft: '-0.6vw',
      marginTop: '13vh',
      width: '19vw',
      minWidth: '17em',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '2vw',
      paddingTop: '5vh',
      width: '90vw',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2vh',
      marginLeft: '0vw',
      width: '94vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3vh',
      marginLeft: '-6vw',
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
const itemIds = [0, 1, 2, 3];
