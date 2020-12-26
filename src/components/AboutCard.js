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
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      marginLeft: '0vw',
      marginTop: '-10vh',
    },
    height: '70vh',
    borderRadius: 0,
    background: 'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%)',
    backgroundBlendMode: 'overlay, hard-light, overlay, normal',
    marginTop: '-6vh',
    marginLeft: '4.5vw',
    opacity: '0.75',
    '&:hover': {
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