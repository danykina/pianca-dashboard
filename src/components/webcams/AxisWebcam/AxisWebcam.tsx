import React, { FunctionComponent } from 'react';

import { AxisWebcamProps } from './AxisWebcam.model';

import WebcamCard from '../WebcamCard/WebcamCard';

const AxisWebcam: FunctionComponent<AxisWebcamProps> = ({
  src,
  alt,
  ...props
}) => (
  <WebcamCard {...props}>
    <img src={src} alt={alt} width="100%" height="100%" />
  </WebcamCard>
);

export default AxisWebcam;
