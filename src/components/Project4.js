import React from 'react'
import { useSpring, animated } from 'react-spring'
import {
    makeStyles,
    Grid,
    Typography,
    Chip,
} from '@material-ui/core';

import Image from 'next/image';
import pgnbuddy from '../../public/withcurrent.png';
import LinkIcon from '@material-ui/icons/Link';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '58vw',
    height: '69vh',
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      marginLeft: '0vw',
      marginBottom: '12vh',
    },
    background: 'grey',
    borderRadius: 0,
    background: 'linear-gradient(127.43deg, #00F0FF 0%, #A80028 100%), radial-gradient(107% 142.8% at 15.71% 104.5%, #F3D0FC 0%, #1700A4 100%), radial-gradient(111% 111% at 74.29% -11%, #A90000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #2200AA 100%)',
    backgroundBlendMode: 'overlay, difference, difference, normal',
    opacity: '0.89',
    boxShadow: '0px 0px 80px 10px rgb(127, 0, 255, 0.6)',
    marginLeft: '4.5vw',
    marginBottom: '11vh',
    '&:hover': {
      boxShadow: '0px 0px 80px 10px rgb(127, 0, 255, 0.8)',
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
    fontSize: '6vh',
    color: '#121212',
    paddingTop: '0.2em',

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
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.25vh',
      marginTop: '2vh',
    },
  },
  image: {
    padding: '.2em',
    borderRadius: '5%',
    pointerEvents: 'none',
  },
  chip: {
    marginTop: '7vh',
    marginLeft: '0.5vw',
    width: '87%',
    textAlign: 'left',
    backgroundColor: 'rgb(18, 18, 18, 0.7)',
    [theme.breakpoints.down('md')]: {
      marginLeft: '4.5vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      marginLeft: '3vw',
    },
  },
  gridtitle: {
    paddingLeft: '2vw',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1vw'
    },
  },
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
            <Grid item xs={4} sm={8} md={7} lg={7}>
              <Image
                src={pgnbuddy}
                alt="Picture of the author"
                width={1900}
                height={1120}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={7} sm={4} md={5} lg={5} className={classes.gridtitle}>
            <Chip label="Freelance/Consulting Work" color="primary" className={classes.chip}/>
              <Typography className={classes.texttitle}>
                WithCurrent
              </Typography>
              <Link href="https://withcurrent.com">
              <LinkIcon style={{fontSize: "3em"}}/>
              </Link>            
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
