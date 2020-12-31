import React, { FunctionComponent } from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import axios from 'axios';
import { useQuery } from 'react-query';
import endpoints from '../../config/endpoints';

import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import DetectionsTable from '../../components/tables/DetectionsTable/DetectionsTable';

const Dashboard: FunctionComponent = () => {
  const { data: piancavalloData } = useQuery(
    'retrievePiancavalloDetections',
    () =>
      axios.get(endpoints.api.retrieveDetections, {
        params: { controlUnitId: 99 },
      }),
  );

  const { data: roncjadeData } = useQuery('retrieveRoncjadeDetections', () =>
    axios.get(endpoints.api.retrieveDetections, {
      params: { controlUnitId: 699 },
    }),
  );

  const { data: valSughetData } = useQuery('retrieveValSughetDetections', () =>
    axios.get(endpoints.api.retrieveDetections, {
      params: { controlUnitId: 921 },
    }),
  );

  const { data: valDeiSassData } = useQuery(
    'retrieveValDeiSassDetections',
    () =>
      axios.get(endpoints.api.retrieveDetections, {
        params: { controlUnitId: 920 },
      }),
  );

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                H4 - Piancavallo
              </Typography>

              <DetectionsTable value={piancavalloData?.data} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                PCIV - Piancavallo (Roncjade)
              </Typography>

              <DetectionsTable value={roncjadeData?.data} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                PCIV - Val Sughet
              </Typography>

              <DetectionsTable value={valSughetData?.data} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                PCIV - Val dei Sass
              </Typography>

              <DetectionsTable value={valDeiSassData?.data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Dashboard;
