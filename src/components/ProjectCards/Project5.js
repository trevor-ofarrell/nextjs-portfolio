import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  makeStyles,
  Grid,
  Typography,
  Chip,
} from '@material-ui/core';

import Image from 'next/image';
import LinkIcon from '@material-ui/icons/Link';
import Link from 'next/link';
import tacklehunger from '../../../public/tacklehunger.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    borderRadius: 0,
    opacity: '0.89',
    marginBottom: '9vh',
    background: '#707070',
    boxShadow: '0px 0px 45px 5px #fafafa',
    '&:hover': {
      boxShadow: '0px 0px 80px 7.5px #fafafa',
      opacity: 0.9,
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      marginLeft: '0vw',
      marginTop: '12vh',
      marginBottom: '12vh',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0vw',
      width: '100%',
      marginTop: '10vh',
      height: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  root2: {
    width: '98%',
    padding: '3.5em',
    paddingTop: '3em',
    [theme.breakpoints.down('md')]: {
      padding: '2em',
      paddingTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1.5em',
    },
  },
  texttitle: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '7vh',
    color: '#121212',
    paddingTop: '0.2em',
    lineHeight: '1.2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '4vh',
      paddingLeft: '4vw',
      paddingTop: '1vh',
      lineHeight: '1.1em',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.25em',
      fontSize: '3.5vh',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.7vh',
      paddingLeft: '0vw',
    },
  },
  textbody: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '2.7vh',
    color: '#121212',
    paddingTop: '0.8em',
    marginBottom: '2vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: '.5em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.25vh',
      marginTop: '2vh',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-2vh',
    },
  },
  image: {
    padding: '.2em',
    borderRadius: '5%',
    pointerEvents: 'none',
  },
  chip: {
    marginTop: '7vh',
    marginLeft: '0.5vw',
    width: '87%',
    textAlign: 'left',
    backgroundColor: 'rgb(18, 18, 18, 0.7)',
    [theme.breakpoints.down('md')]: {
      marginTop: '2vh',
      width: '95%',
      marginLeft: '3vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0vw',
    },
  },
  gridtitle: {
    paddingLeft: '2vw',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0vw',
    },
  },
  link: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginLeft: '3vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0vw',
    },
  },
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Project5 = () => {
  const [props, set] = useSpring(
    () => ({ xys: [0, 0, 1], config: { mass: 7, tension: 350, friction: 60 } }),
  );
  const classes = useStyles();
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      className={classes.root}
    >
      <Grid container className={classes.root2}>
        <Grid item xs={12} sm={8} md={7} lg={7}>
          <Image
            src={tacklehunger}
            alt="screen shot of tacklehunger.org admin panel"
            width={1900}
            height={1120}
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={5} lg={5} className={classes.gridtitle}>
          <Chip label="Freelance/Consulting Work" color="primary" className={classes.chip} />
          <Typography className={classes.texttitle}>
            Tackle Hunger
          </Typography>
          <Link href="https://tacklehunger.org">
            <LinkIcon style={{ fontSize: '3em' }} className={classes.link} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography className={classes.textbody}>
            In this project I wrote the initial code for the front-end of the Admin console,
            and the Edit Charity page for TackleHunger,
            a "youth-inspired movement working across the nation to
            tackle hunger in their local communities".
            Along with coding those two pages, I was a consultant on what
            technologies to use for the initial frontend development.
          </Typography>
        </Grid>
      </Grid>
    </animated.div>
  );
};