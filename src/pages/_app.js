import React, {useState, useEffect} from "react";

import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormspreeProvider } from '@formspree/react';
import './styles.css'

//
// A note about Server Side Rendering w/ stylesheets & Material UI
// https://material-ui.com/guides/server-rendering/#server-rendering
// -

function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

function PreventFlashOfUnstyledContent() {
  const mounted = useIsMounted();

  if (mounted) {
    return null;
  }

  return (
    <Head>
      <style
        id="preventFlashOfUnstyledContent"
        dangerouslySetInnerHTML={{
          __html: `*, *::before, *::after { transition: none !important; }`,
        }}
      />
      <meta
        name="viewport"
        content="minimum-scale=0.100, initial-scale=1.00, width=device-width"
      />
    </Head>
  );
}

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
    <FormspreeProvider project="1552057770667146702">
      <React.Fragment>
        <Head>
          <title>Trevor O'Farrell</title>
          <meta
            name="viewport"
            content="minimum-scale=0.100, initial-scale=1.00, width=device-width"
          />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <PreventFlashOfUnstyledContent/>
        <Component {...pageProps} />
      </React.Fragment>
    </FormspreeProvider>
  );
}
