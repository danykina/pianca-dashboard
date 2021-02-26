import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { useQuery as useReactQuery } from 'react-query';

import { UseQueryHook, UseQueryOptions } from './useQuery.model';

const useQuery: UseQueryHook = <T>(
  url: string,
  config?: AxiosRequestConfig,
  options?: UseQueryOptions<T>,
) =>
  useReactQuery<AxiosResponse<T>, Error>(
    ['query', url],
    () => axios.get<T>(url, config),
    options,
  );

export default useQuery;
