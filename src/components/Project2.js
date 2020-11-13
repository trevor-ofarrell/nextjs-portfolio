import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '58vw',
    height: '60vh',
    background: 'grey',
    borderRadius: 5,
    background: 'linear-gradient(to right, rgb(255, 0, 204, 0.5), rgb(51, 51, 153, 0.5))',
    boxShadow: '0px 0px 80px 10px rgb(196, 113, 237, 0.5)',
    marginLeft: '4.5vw',
    marginBottom: '10vh',
    '&:hover': {
      boxShadow: '0px 0px 110px 20px rgb(196, 113, 237, 0.5)',
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '0vw',
        width: '100%',
        marginTop: '10vh',
        height: '60vh',
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

export const Project2 = () => {
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
        </Grid>
      </Grid>
    </animated.div>
  )
}