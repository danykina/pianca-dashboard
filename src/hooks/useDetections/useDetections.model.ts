import {
  UseQueryOptions,
  UseQueryResponse,
} from '../core/useQuery/useQuery.model';

import { Detection } from '../../models/common.model';

export type UseDetectionsParams = {
  readonly controlUnitId: number;
};

export type UseDetectionsHook = (
  value: UseDetectionsParams,
  options?: UseQueryOptions<readonly Detection[]>,
) => UseQueryResponse<readonly Detection[]>;
