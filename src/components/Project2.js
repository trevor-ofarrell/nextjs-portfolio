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
import pgnbuddy from '../../public/pgnbuddy.png';
import pgnbuddymobile from '../../public/lichessTVWP.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    borderRadius: 0,
    opacity: '0.89',
    boxShadow: '0px 0px 45px 5px #fafafa',
    marginBottom: '9vh',
    background: '#707070',
    '&:hover': {
      boxShadow: '0px 0px 80px 7.5px #fafafa',
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      marginLeft: '0vw',
      marginBottom: '12vh',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0vw',
      marginTop: '-10vh',
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      marginTop: '5vh',
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
    fontSize: '6.5vh',
    color: '#121212',
    paddingTop: '0.2em',
    lineHeight: '1.2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '4vh',
      paddingLeft: '4vw',
      paddingTop: '1vh',
    },
    [theme.breakpoints.down('sm')]: {
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
    marginTop: '1vh',
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
  imagediv: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  input: {
    color: '#fafafa',
    fontWeight: '300',
  },
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Project2 = () => {
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
        <Grid item xs={12} sm={6} md={6} lg={5} className={classes.imagediv}>
          <Image
            src={pgnbuddymobile}
            alt="Picture of the author"
            width={715}
            height={805}
            layout="intrinsic"
            quality={75}
            priority
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={7} className={classes.gridtitle}>
          <Chip label="Open Source Project" color="primary" className={classes.chip} />
          <Typography className={classes.texttitle}>
            LichessTV Watch Party
          </Typography>
          <Link href="https://lichess-TV-watch-party.vercel.app">
            <LinkIcon style={{ fontSize: '3em' }} className={classes.link} />
          </Link>
          <Typography className={classes.textbody}>
          Watch live chess games being played on lichess, and join the discussion. 
          Create a room with a lichess.org game ID, or catch the featured top rated game. 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
         
        </Grid>
      </Grid>
    </animated.div>
  );
};
