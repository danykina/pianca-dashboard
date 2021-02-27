import axios, { AxiosRequestConfig } from 'axios';

import { useQuery as useReactQuery } from 'react-query';

import { UseQueryHook, UseQueryOptions } from './useQuery.model';

const useQuery: UseQueryHook = <T>(
  url: string,
  config?: AxiosRequestConfig,
  options?: UseQueryOptions<T>,
) =>
  useReactQuery<T, Error>(
    ['query', url],
    async () => {
      const { data } = await axios.get<T>(url, config);

      return data;
    },
    options,
  );

export default useQuery;
