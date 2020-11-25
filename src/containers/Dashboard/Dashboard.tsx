import React, { FunctionComponent } from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import DetectionsTable from '../../components/tables/DetectionsTable/DetectionsTable';

import controlUnitData from '../../mocks/control-unit-data.json';

const Dashboard: FunctionComponent = () => {
  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                H4 - Piancavallo
              </Typography>

              <DetectionsTable value={controlUnitData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                H4 - Piancavallo
              </Typography>

              <DetectionsTable value={controlUnitData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                H4 - Piancavallo
              </Typography>

              <DetectionsTable value={controlUnitData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                H4 - Piancavallo
              </Typography>

              <DetectionsTable value={controlUnitData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Dashboard;
