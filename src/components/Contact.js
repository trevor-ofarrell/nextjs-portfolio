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
        background: 'linear-gradient(180deg, #0C003C 0%, #BFFFAF 100%), linear-gradient(165deg, #480045 25%, #E9EAAF 100%), linear-gradient(145deg, #480045 25%, #E9EAAF 100%), linear-gradient(300deg, rgba(233, 223, 255, 0) 0%, #AF89FF 100%), linear-gradient(90deg, #45EBA5 0%, #45EBA5 30%, #21ABA5 30%, #21ABA5 60%, #1D566E 60%, #1D566E 70%, #163A5F 70%, #163A5F 100%)',
        backgroundBlendMode: 'overlay, overlay, overlay, multiply, normal',
        opacity: '0.95',
        width: '100%',
        marginBottom: '5vh',
    },
    input: {
        color: '#ffccdc'
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
                        className: classes.input
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