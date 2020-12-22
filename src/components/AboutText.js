import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Image from 'next/image'
import me from '../../public/trevorprofilepic.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '98%',
    padding: '1.5em',
    paddingTop: '5vh'
  },
  texttitle: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '7vh',
    color: '#121212',
    paddingTop: '1.1em',
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
    fontSize: '2.6vh',
    color: '#',
    paddingTop: '1.5em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '.5em'
    }
  },
  image: {
    padding: '.2em',
    opacity: '0.90',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
}));

export const AboutText = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item xs={0} sm={0} md={0} lg={1}/>
            <Grid item xs={4} sm={4} md={3} lg={3}>
              <Image
                src={me}
                alt="Picture of the author"
                width={700}
                height={700}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={7} sm={7} md={8} lg={6}>
              <Typography className={classes.texttitle}>
                About Me
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.textbody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
          </Grid>
        </Grid>
    )
}