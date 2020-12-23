import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { makeStyles, createMuiTheme } from '@material-ui/core';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xl')]: {
      marginLeft: '1vw',
      marginTop: '13vh',
      width: '13vw',
      minWidth: '17em',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '-0.25vw',
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
      width: '94.5vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3vh',
      marginLeft: '-6vw',
      width: '100vw',
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
