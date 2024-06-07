import { QueryFunction, QueryKey, UseQueryOptions, useQuery as _useQuery } from '@tanstack/react-query';

export type UseQueryProps<TData = unknown, TError = unknown, TQueryFnData = TData> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<TQueryFnData>;
  options?: Omit<UseQueryOptions<TData, TError, TQueryFnData>, 'suspense'>;
};

export const useQuery = <TData, TError = undefined>(props: UseQueryProps<TData, TError>) => {
  const { queryKey, queryFn, options } = props;

  return _useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // suspense: false,
    ...options,
  });
};
