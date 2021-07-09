import React from 'react';
import {
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';
import { withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  card: {
    margin: 'auto',
    width: '52vw',
    height: '71vh',
    [theme.breakpoints.down('md')]: {
      marginTop: '1vh',
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
      width: '100%',
      height: '60vh',
    },
  },
  textfield: {
    borderRadius: '5px',
    background: '#303030',
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
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    background: '#303030',
    opacity: 0.8,
    '&:hover': {
      background: '#404040',
      opacity: '1',
    },
  },
}))(Button);

const textFieldTheme = createMuiTheme({
  palette: {
    primary: { main: '#fafafa' },
  },
});

export const Contact = () => {
  const classes = useStyles();
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return (
      <div className={classes.success}>
        Thanks for the message, I'll get back to you ASAP.
      </div>
    );
  }

  return (
    <ThemeProvider theme={textFieldTheme}>
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
                className: classes.input,
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
                className: classes.input,
              }}
              InputLabelProps={{
                className: classes.input,
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
                className: classes.input,
              }}
              InputLabelProps={{
                className: classes.input,
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
    </ThemeProvider>
  );
};
