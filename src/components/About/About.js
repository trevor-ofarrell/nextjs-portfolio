import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import { AboutCard } from './AboutCard';

export const About = () => (
  <div>
    <Grid container>
      <Grid item xs={12} lg={12}>
        <AboutCard />
      </Grid>
    </Grid>
  </div>
);
