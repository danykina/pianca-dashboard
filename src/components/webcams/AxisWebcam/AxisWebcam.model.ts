import { WebcamCardProps } from '../WebcamCard/WebcamCard.model';

export type AxisWebcamProps = WebcamCardProps & {
  readonly src: string;
  readonly alt: string;
};
