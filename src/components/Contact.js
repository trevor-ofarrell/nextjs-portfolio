import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button
} from "@material-ui/core";
import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '-3vh',
        marginLeft: '4.5vw',
    },
    card: {
        width: '58vw',
        height: '71vh',
    },
    textfield: {
        borderRadius: '5px',
        background: 'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%)',
        backgroundBlendMode: 'overlay, hard-light, overlay, normal',
        opacity: '0.88',
        width: '100%',
        marginBottom: '5vh',
    },
    input: {
        color: '#ffccdc',
    }
}))



export const Contact = () => {
    const classes = useStyles();
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
      return <div>Thank you for the message, I'll get back to you ASAP.!</div>;
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
                        id="email"
                        type="email" 
                        name="email"      
                        label="email"
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
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <Button type="submit" disabled={state.submitting}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}