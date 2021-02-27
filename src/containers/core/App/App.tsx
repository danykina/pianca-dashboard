import React, { FunctionComponent } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from '../../../config/theme';

import { SnackbarProvider } from 'notistack';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import enLocale from 'date-fns/locale/en-US';

import Router from '../Router/Router';

const Root: FunctionComponent = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider hideIconVariant>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
            <CssBaseline />

            <Router />
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const App: FunctionComponent = () => <Root />;

export default App;
