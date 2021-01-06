import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
} from '@material-ui/core';
import { HomeTextBold } from './HomeTextBold'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    marginTop: '-10vh',
    zIndex: '100',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: '80vw',
      marginTop: '1vh',
    },
  },
  typewritter: {
      textAlign: 'center',
  },
}));

const calc = (x, y) => [-(y - window.innerHeight / 3) / 20, (x - window.innerWidth / 2) / 20, 1.175]
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const Title = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const classes = useStyles()

  return (
    <>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        className={classes.root}
      >
        <Grid container className={classes.typewritter}>
          <Grid item xs={12} lg={12}>
            <HomeTextBold />
          </Grid>
        </Grid>
      </animated.div>
    </>
  )
}
