import { AxiosResponse } from 'axios';
import { QueryResult } from 'react-query';
import { Detection } from '../../models/controlUnit.model';

export type UseDetectionsHook = (value: {
  readonly controlUnitId: number;
}) => QueryResult<AxiosResponse<readonly Detection[]>>;
