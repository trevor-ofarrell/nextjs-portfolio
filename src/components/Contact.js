import React from "react";
import {
  makeStyles,
  TextField,
  Button
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '4.5vw',
        [theme.breakpoints.down('lg')]: {
            marginTop: '1.5vh',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '0vw',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '-2vh',
        },
    },
    card: {
        width: '58vw',
        height: '71vh',
        [theme.breakpoints.down('md')]: {
            marginTop: '13vh',
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '10vh',
            width: '100%',
            height: '60vh',
        }
    },
    textfield: {
        borderRadius: '5px',
        background: 'radial-gradient(111% 111% at 74.29% -11%, #A93300 0%, #005570 100%), linear-gradient(127.43deg, #00D5C8 0%, #2200AA 100%)',
        backgroundBlendMode: 'difference, normal',
        opacity: '0.8',
        width: '100%',
        marginBottom: '5vh',
        fontFamily: 'Cyber',
    },
    input: {
        color: '#ffffff',
        fontFamily: 'Cyber',
        fontSize: '1.5em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em',
        },
    },
    button: {
        color: '#ffffff',
        fontFamily: 'Cyber',
        fontSize: '1.2em',
    },
    success: {
        color: '#ffffff',
        fontFamily: 'Cyber',
        fontSize: '1.8em',
        marginTop: '23vh',
        [theme.breakpoints.down('md')]: {
            marginTop: '37vh',
        },
    }
}))

const ColorButton = withStyles((theme) => ({
    root: {
        background: 'linear-gradient(180deg, #0C003C 0%, #BFFFAF 100%), linear-gradient(165deg, #480045 25%, #E9EAAF 100%), linear-gradient(145deg, #480045 25%, #E9EAAF 100%), linear-gradient(300deg, rgba(233, 223, 255, 0) 0%, #AF89FF 100%), linear-gradient(90deg, #45EBA5 0%, #45EBA5 30%, #21ABA5 30%, #21ABA5 60%, #1D566E 60%, #1D566E 70%, #163A5F 70%, #163A5F 100%)',
        backgroundBlendMode: 'overlay, overlay, overlay, multiply, normal',
        opacity: 0.8,
      '&:hover': {
            background: 'linear-gradient(180deg, #0C003C 0%, #BFFFAF 100%), linear-gradient(165deg, #480045 25%, #E9EAAF 100%), linear-gradient(145deg, #480045 25%, #E9EAAF 100%), linear-gradient(300deg, rgba(233, 223, 255, 0) 0%, #AF89FF 100%), linear-gradient(90deg, #45EBA5 0%, #45EBA5 30%, #21ABA5 30%, #21ABA5 60%, #1D566E 60%, #1D566E 70%, #163A5F 70%, #163A5F 100%)',
            backgroundBlendMode: 'overlay, overlay, overlay, multiply, normal',
            opacity: '1',
      },
    },
}))(Button);



export const Contact = () => {
    const classes = useStyles();
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
      return <div className={classes.success}>Thanks for the message, I'll get back to you ASAP.</div>;
    }

    return(
        <div className={classes.root}>
            <div className={classes.card}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        type="name" 
                        name="name"                        
                        label="Name"
                        variant="filled"
                        className={classes.textfield}
                        color="primary"
                        InputProps={{
                            className: classes.input
                        }}
                        InputLabelProps={{
                            className: classes.input,
                        }}
                    />
                    <TextField
                        id="email"
                        type="email" 
                        name="email"      
                        label="email"
                        variant="filled"
                        className={classes.textfield}
                        color="primary"
                        InputProps={{
                            className: classes.input
                        }}
                        InputLabelProps={{
                            className: classes.input
                        }}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <TextField
                        id="message"
                        name="message"
                        label="Send a message.."
                        multiline
                        rows={9}
                        variant="filled"
                        className={classes.textfield}
                        color="primary"
                        InputProps={{
                            className: classes.input
                        }}
                        InputLabelProps={{
                            className: classes.input
                        }}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <ColorButton
                        variant="contained"
                        type="submit"
                        disabled={state.submitting}
                        className={classes.button}
                    >
                        Submit
                    </ColorButton>
                </form>
            </div>
        </div>
    )
}