import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
    Typography,
    Chip,
} from '@material-ui/core';

import Image from 'next/image';
import pgnbuddy from '../../public/pgnbuddy.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '58vw',
    height: '69vh',
    background: 'grey',
    borderRadius: 5,
    background: 'linear-gradient(127.43deg, #00F0FF 0%, #A80028 100%), radial-gradient(107% 142.8% at 15.71% 104.5%, #F3D0FC 0%, #1700A4 100%), radial-gradient(111% 111% at 74.29% -11%, #A90000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #2200AA 100%)',
    backgroundBlendMode: 'overlay, difference, difference, normal',
    opacity: '0.89',
    boxShadow: '0px 0px 80px 10px rgb(196, 113, 237, 0.5)',
    marginLeft: '4.5vw',
    marginBottom: '11vh',
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
  root2: {
    width: '98%',
    padding: '3.5em',
    paddingTop: '3em'
  },
  texttitle: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '7vh',
    color: '#121212',
    paddingTop: '0.2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '5vh',
      paddingLeft: '2vw',
      paddingTop: '1.1em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vh',
      paddingLeft: '2vw'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.7vh',

    }
  },
  textbody: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '2.7vh',
    color: '#121212',
    paddingTop: '0.8em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '.5em'
    }
  },
  image: {
    padding: '.2em',
    opacity: '0.95',
    borderRadius: '5%',
    pointerEvents: 'none',
  },
  chip: {
    marginTop: '7vh',
    marginLeft: '0.5vw',
    width: '87%',
    textAlign: 'left',
    backgroundColor: 'rgb(18, 18, 18, 0.6)'
  },
  gridtitle: {
    paddingLeft: '2vw'
  }
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const Project4 = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 7, tension: 350, friction: 40 } }))
  const classes = useStyles()
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      className={classes.root}
    >
      <Grid container className={classes.root2}>
            <Grid item xs={4} sm={4} md={7} lg={7}>
              <Image
                src={pgnbuddy}
                alt="Picture of the author"
                width={1900}
                height={1120}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={7} sm={7} md={5} lg={5} className={classes.gridtitle}>
            <Chip label="Personal Project" color="primary" className={classes.chip}/>
              <Typography className={classes.texttitle}>
                PGNBuddy
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.textbody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
          </Grid>
        </Grid>
    </animated.div>
  )
}
