import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-6vh',
        marginLeft: '4.5vw',
    },
    card: {
        width: '58vw',
        height: '71vh',
        background: 'linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);',
        opacity: '0.7',
        backdropFilter: 'blur(20px) saturate(160%) contrast(45%) brightness(140%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%) contrast(45%) brightness(140%)',
        borderRadius: '10px',
    },
}))

export const Contact = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.card}>
                hello world
            </div>
        </div>
    )
}