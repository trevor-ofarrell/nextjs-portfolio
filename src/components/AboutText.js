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
    padding: '2em',
    paddingTop: '5vh'
  },
  texttitle: {
    textAlign: 'center',
    fontFamily: 'Cyber',
    fontWeight: '600',
    fontSize: '5vh',
    color: '#000000',
    paddingTop: '1.6em',
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
    fontSize: '2.9vh',
    color: '#000000',
    paddingTop: '1.5em',
    paddingBottom: '2.5vh',
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
            <Grid item xs={7} sm={7} md={8} lg={7}>
              <Typography className={classes.texttitle}>
              Hi, I'm Trevor O'Farrell
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.textbody}>
              I’m a east Bay Area native who loves mountain biking, chess, the outdoors, JavaScript, and making beautiful websites. Currently I’m seeking full-time employment, and interested in anything in the full stack web development/frontend spectrum.
              </Typography>
              <Typography className={classes.textbody}>
              Feel free to reach out with inquires about hiring me for freelancing/consulting as well.
              </Typography>
          </Grid>
        </Grid>
    )
}