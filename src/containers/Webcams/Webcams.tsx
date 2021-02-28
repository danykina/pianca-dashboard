import React, { FunctionComponent } from 'react';

import { Grid } from '@material-ui/core';

import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

import AxisWebcam from '../../components/webcams/AxisWebcam/AxisWebcam';

const Webcams: FunctionComponent = () => {
  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <AxisWebcam
            cardHeader={{ title: 'Nevelandia' }}
            src="/nevelandia-webcam-streaming"
            alt="Webcam Nevelandia"
          />
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Webcams;
