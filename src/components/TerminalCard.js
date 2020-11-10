import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
} from '@material-ui/core';
import { HomeText } from './HomeText'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '70vh',
    background: 'grey',
    borderRadius: 5,
    background: 'linear-gradient(to bottom, rgb(127, 0, 255, 0.4), rgb(225, 0, 255, 0.45))',
    boxShadow: '0px 0px 80px 10px rgb(127, 0, 255, 0.6)',
    marginTop: '-6vh',
    '&:hover': {
      boxShadow: '0px 0px 100px 15px rgb(127, 0, 255, 0.6)',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '22vh',
      height: '45vh',
    },
  },
  termbar: {
      backgroundColor: 'rgba(71, 71, 71);',
      height: '2.3vh',
  },
  button: {
      height: '2vh',
      width: '2vw',
      marginLeft: '-2.7em',
      marginTop: '3px'
  },
  typewritter: {
      textAlign: 'left',
  }
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const TerminalCard = () => {
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
          <HomeText />
        </Grid>
      </Grid>
    </animated.div>
  )
}