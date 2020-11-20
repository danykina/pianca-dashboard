import React, { FunctionComponent } from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
  },
}));

const BaseLayout: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
};

export default BaseLayout;
