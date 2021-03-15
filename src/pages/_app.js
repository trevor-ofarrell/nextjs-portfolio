import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FormspreeProvider } from '@formspree/react';
import './styles.css';

//
// A note about Server Side Rendering w/ stylesheets & Material UI
// https://material-ui.com/guides/server-rendering/#server-rendering
// -

export default function SaveApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <FormspreeProvider project="1552057770667146702">
      <>
        <Head>
          <title>Trevor O'Farrell</title>
          <meta
            name="viewport"
            content="minimum-scale=0.100, initial-scale=1.00, width=device-width"
          />
          <meta name="description" content="Hi I'm Trevor O'Farrell, I'm a full stack web developer from the Bay Area. Welcome to my website!" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </>
    </FormspreeProvider>
  );
}
