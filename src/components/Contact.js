import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '1vh',
        marginLeft: '4.5vw',
    },
    card: {
        width: '58vw',
        height: '71vh',
    },
    textfield: {
        borderRadius: '5px',
        background: 'linear-gradient(121.28deg, #03002C 0%, #00FF94 100%), linear-gradient(180deg, #00647A 0%, #FFFFFF 100%), linear-gradient(244.35deg, #FF8282 0%, #E86B6B 50.58%, #001B29 100%), linear-gradient(244.35deg, #E03F3F 0%, #00114B 49.48%, #FF0000 100%), radial-gradient(100% 216.55% at 0% 0%, #2400FF 0%, #FF0000 44.27%, #610051 100%), linear-gradient(307.27deg, #096F5C 0.37%, #687EB5 50.19%, #8877CE 100%), radial-gradient(56.34% 100% at 36.02% 0%, #FF00C7 0%, #006C7A 38.54%, #FF9900 100%)',
        backgroundBlendMode: 'overlay, difference, overlay, overlay, difference, color-dodge, normal',
        opacity: '0.9',
        width: '100%',
        marginBottom: '5vh',
    },
    input: {
        color: '#ffccdc',
    }
}))



export const Contact = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.card}>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    className={classes.textfield}
                    color="secondary"
                    InputProps={{
                        className: classes.input
                    }}
                    InputLabelProps={{
                        className: classes.input,
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="email" variant="outlined"
                    className={classes.textfield}
                    color="secondary"
                    InputProps={{
                        className: classes.input
                    }}
                    InputLabelProps={{
                        className: classes.input
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Send a message.."
                    multiline
                    rows={15}
                    variant="outlined"
                    className={classes.textfield}
                    color="secondary"
                    InputProps={{
                        className: classes.input
                    }}
                    InputLabelProps={{
                        className: classes.input
                    }}
                />
            </div>
        </div>
    )
}