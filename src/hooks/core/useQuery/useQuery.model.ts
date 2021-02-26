import { AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  UseQueryOptions as UseReactQueryOptions,
  QueryObserverResult,
} from 'react-query';

export type UseQueryResponse<T> = QueryObserverResult<AxiosResponse<T>, Error>;

export type UseQueryOptions<T> = UseReactQueryOptions<AxiosResponse<T>, Error>;

export type UseQueryHook = <T>(
  url: string,
  config?: AxiosRequestConfig,
  options?: UseQueryOptions<T>,
) => UseQueryResponse<T>;
