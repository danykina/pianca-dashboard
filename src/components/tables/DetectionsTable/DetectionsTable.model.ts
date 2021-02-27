import { Detection } from '../../../models/common.model';

export type DetectionsTableProps = {
  readonly value?: readonly Detection[];
  readonly loading?: boolean;
};
