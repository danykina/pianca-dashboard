import React, { FunctionComponent } from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from '../../../config/theme';

import { SnackbarProvider } from 'notistack';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import enLocale from 'date-fns/locale/en-US';

import Router from '../Router/Router';

const Root: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider hideIconVariant>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
          <CssBaseline />

          <Router />
        </MuiPickersUtilsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const App: FunctionComponent = () => <Root />;

export default App;
