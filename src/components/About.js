import React, { useCallback } from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";

import { AboutCard } from './AboutCard'

export const About = () => {

  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
            <AboutCard/>
        </Grid>
      </Grid>
    </div>
  );
};