import React, { FunctionComponent } from 'react';

import { Drawer, makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import { NavigationLayoutProps } from './NavigationLayout.model';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  drawer: {
    width: '60px',
  },
}));

const NavigationLayout: FunctionComponent<NavigationLayoutProps> = ({
  navigationMenu,
  className,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, className)}
        {...props}
      >
        {navigationMenu}
      </Drawer>

      {children}
    </div>
  );
};

export default NavigationLayout;
