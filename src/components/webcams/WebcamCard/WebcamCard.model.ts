import { CardHeaderProps, CardProps } from '@material-ui/core';

export type WebcamCardProps = CardProps & {
  readonly cardHeader?: CardHeaderProps;
};
