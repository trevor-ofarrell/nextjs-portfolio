import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
} from '@material-ui/core';
import Close from '../../public/windowclose.svg'
import { HomeText } from './HomeText'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    termbar: {
        backgroundColor: 'rgba(71, 71, 71);',
        height: '2.3vh',
    },
    closesvg: {
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
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const TerminalCard = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const classes = useStyles()
  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Grid container className={classes.termbar}>
          <Grid itwm xs={1} lg={1}>
          <button className={classes.button} aria-label="button for decoration, no fuunctionality">
              <img height="90%" src={Close} className={classes.closesvg} alt="close terminal button, for decoration"/>
          </button>
          </Grid>
      </Grid>
      <Grid container className={classes.typewritter}>
        <Grid item xs={4} lg={12}>
          <HomeText />
        </Grid>
      </Grid>
    </animated.div>
  )
}

