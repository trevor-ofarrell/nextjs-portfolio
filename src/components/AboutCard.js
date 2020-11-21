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
    background: 'grey',
    borderRadius: 5,
    background: 'linear-gradient(151.47deg, #0500FF 0.49%, rgba(1, 0, 26, 0) 32.86%), linear-gradient(238.72deg, #FFFFFF 0%, #1F001C 100%), radial-gradient(100% 143.09% at 100% 0%, #000000 0%, #FFC700 100%), radial-gradient(100% 143.09% at 100% 0%, #5200FF 0%, #00113D 100%), radial-gradient(59.5% 100% at 49.32% 0%, #FF8A00 0%, #001AFF 100%), linear-gradient(121.28deg, #DBFF00 0%, #3300FF 100%), linear-gradient(121.28deg, #FF8A00 0%, #001AFF 100%), linear-gradient(180deg, #33FF00 0%, #FF0000 100%), radial-gradient(70.71% 99% at 100% 39.75%, #8000FF 0%, #FF0000 100%), radial-gradient(70.41% 100% at 50% 0%, #D5B300 0%, #00AA96 100%)',
    backgroundBlendMode: 'luminosity, soft-light, color-dodge, overlay, overlay, difference, difference, exclusion, difference, normal',
    opacity: '0.9',
    boxShadow: '0px 0px 80px 10px rgb(127, 0, 255, 0.6)',
    marginTop: '-6vh',
    marginLeft: '4.5vw',
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