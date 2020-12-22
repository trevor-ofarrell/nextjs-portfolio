import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
} from '@material-ui/core';
import { AboutText } from './AboutText'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '58vw',
    height: '70vh',
    borderRadius: 5,
    background: 'radial-gradient(111% 111% at 74.29% -11%, #A93300 0%, #005570 100%), linear-gradient(127.43deg, #00D5C8 0%, #2200AA 100%)',
    backgroundBlendMode: 'difference, normal',
    boxShadow: '0px 0px 80px 10px rgb(127, 0, 255, 0.6)',
    marginTop: '-6vh',
    marginLeft: '4.5vw',
    opacity: '0.9',
    '&:hover': {
      boxShadow: '0px 0px 100px 15px rgb(127, 0, 255, 0.6)',
    },
    [theme.breakpoints.down('md')]: {
      width: '83.5vw',
      marginTop: '8vh',
      height: '75vh',
      marginLeft: '0vw',
    },
  },
  typewritter: {
      textAlign: 'left',
  }
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const AboutCard = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 7, tension: 350, friction: 40 } }))
  const classes = useStyles()
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
  )
}