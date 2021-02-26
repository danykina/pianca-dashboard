import {
  UseQueryOptions,
  UseQueryResponse,
} from '../core/useQuery/useQuery.model';

import { Detection } from '../../models/common.model';

export type UseDetectionsHook = (
  value: {
    readonly controlUnitId: number;
  },
  options?: UseQueryOptions<readonly Detection[]>,
) => UseQueryResponse<readonly Detection[]>;
