import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  makeStyles,
  Grid,
} from '@material-ui/core';
import { AboutText } from './AboutText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60vw',
    marginTop: 'auto',
    marginBototm: 'auto',
    height: '60vh',
    borderRadius: 0,
    marginLeft: '4.5vw',
    opacity: 0.8,
    background: '#707070',
    boxShadow: '0px 0px 55px 7px #fafafa',
    '&:hover': {
      boxShadow: '0px 0px 80px 7.5px #fafafa',
      opacity: 0.9,
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      marginLeft: '0vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '15vh',
      height: 'auto',
      marginLeft: '0vw',
    },
  },
  typewritter: {
    textAlign: 'left',
  },
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const AboutCard = () => {
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
      <Grid container className={classes.typewritter}>
        <Grid item xs={12} lg={12}>
          <AboutText />
        </Grid>
      </Grid>
    </animated.div>
  );
};
