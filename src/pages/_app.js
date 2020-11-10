import React from "react";

import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import './styles.css'

//
// A note about Server Side Rendering w/ stylesheets & Material UI
// https://material-ui.com/guides/server-rendering/#server-rendering
// -
export default function SaveApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Trevor O'Farrell</title>
        <meta
          name="viewport"
          content="minimum-scale=0.100, initial-scale=1.00, width=device-width"
        />
        <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
}