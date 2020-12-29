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
    [theme.breakpoints.up('xl')]: {
      marginLeft: '1vw',
      marginTop: '20vh',
      width: '15vw',
      minWidth: '17em',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '-.75vw',
      marginTop: '25vh',
      width: '19vw',
      minWidth: '17em',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '2vw',
      marginTop: '17vh',
      width: '90vw',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '17vh',
      marginLeft: '0vw',
      width: '94.5vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '14vh',
      marginLeft: '-5vw',
      width: '100vw',
    },
  },
}));

export const Nav = ({toggleView}) => {
  const classes = useStyles()

  return(
    <motion.ul variants={variants} className={classes.root}>
      {itemIds.map(i => (
      <MenuItem i={i} key={i} toggleView={toggleView}/>
      ))}
    </motion.ul>
  )
}
const itemIds = [0, 1, 2, 3];
