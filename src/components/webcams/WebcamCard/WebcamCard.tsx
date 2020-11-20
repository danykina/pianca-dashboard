import React, { FunctionComponent } from 'react';

import { Card, CardHeader, makeStyles } from '@material-ui/core';

import { WebcamCardProps } from './WebcamCard.model';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(0.5, 1),
  },
}));

const WebcamCard: FunctionComponent<WebcamCardProps> = ({
  className,
  children,
  cardHeader,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, className)} {...props}>
      {cardHeader && <CardHeader {...cardHeader} />}
      {children}
    </Card>
  );
};

export default WebcamCard;
