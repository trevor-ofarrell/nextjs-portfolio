import * as React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xl')]: {
      marginLeft: '1vw',
      marginTop: '20vh',
      width: '30em',
      minWidth: '17em',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '-.75vw',
      marginTop: '25vh',
      width: '25em',
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

export const Nav = ({ toggleView, toggle }) => {
  const classes = useStyles();
  const itemIds = [0, 1, 2, 3];

  return (
    <motion.ul variants={variants} className={classes.root}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} toggleView={toggleView} toggle={toggle} />
      ))}
    </motion.ul>
  );
};
