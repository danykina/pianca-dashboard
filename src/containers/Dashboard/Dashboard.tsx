import React, { FunctionComponent } from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import DetectionsTable from '../../components/tables/DetectionsTable/DetectionsTable';
import useDetections from '../../hooks/useDetections/useDetections';

const Dashboard: FunctionComponent = () => {
  const { data: { data: piancavalloData } = {} } = useDetections({
    controlUnitId: 99,
  });

  const { data: { data: roncjadeData } = {} } = useDetections({
    controlUnitId: 699,
  });

  const { data: { data: valSughetData } = {} } = useDetections({
    controlUnitId: 921,
  });

  const { data: { data: valDeiSassData } = {} } = useDetections({
    controlUnitId: 920,
  });

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                H4 - Piancavallo
              </Typography>

              <DetectionsTable value={piancavalloData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                PCIV - Piancavallo (Roncjade)
              </Typography>

              <DetectionsTable value={roncjadeData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                PCIV - Val Sughet
              </Typography>

              <DetectionsTable value={valSughetData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                PCIV - Val dei Sass
              </Typography>

              <DetectionsTable value={valDeiSassData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Dashboard;
