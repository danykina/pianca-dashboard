import React, { FunctionComponent } from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';
import DetectionsTable from '../../components/tables/DetectionsTable/DetectionsTable';
import useDetections from '../../hooks/useDetections/useDetections';

const Dashboard: FunctionComponent = () => {
  const piancavalloData = useDetections({ controlUnitId: 99 });
  const roncjadeData = useDetections({ controlUnitId: 699 });
  const valSughetData = useDetections({ controlUnitId: 921 });
  const valDeiSassData = useDetections({ controlUnitId: 920 });

  const initCards = [
    {
      title: 'H4 - Piancavallo',
      data: piancavalloData.data,
      loading: piancavalloData.isLoading,
    },
    {
      title: 'PCIV - Piancavallo (Roncjade)',
      data: roncjadeData.data,
      loading: roncjadeData.isLoading,
    },
    {
      title: 'CIV - Val Sughet',
      data: valSughetData.data,
      loading: valSughetData.isLoading,
    },
    {
      title: 'PCIV - Val dei Sass',
      data: valDeiSassData.data,
      loading: valDeiSassData.isLoading,
    },
  ];

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        {initCards.map(({ title, data, loading }) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={title}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  {title}
                </Typography>

                <DetectionsTable value={data} loading={loading} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </BaseLayout>
  );
};

export default Dashboard;
