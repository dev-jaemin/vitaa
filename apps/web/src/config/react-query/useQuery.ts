import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { QueryFunction, QueryKey, UseQueryOptions, useQuery as _useQuery } from 'react-query';
import { COMMON_MESSAGE } from '../../constants/snackbarMessage';

export type UseQueryProps<TData = unknown, TError = unknown, TQueryFnData = TData> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<TQueryFnData>;
  options?: Omit<UseQueryOptions<TData, TError, TQueryFnData>, 'suspense'>;
};

export const useQuery = <TData, TError = undefined>(props: UseQueryProps<TData, TError>, errorMessage?: string) => {
  const { queryKey, queryFn, options } = props;
  const { enqueueSnackbar } = useSnackbar();

  return _useQuery(queryKey, queryFn, {
    onError: error => {
      if (error instanceof AxiosError)
        enqueueSnackbar(errorMessage ?? COMMON_MESSAGE.SERVER_ERROR, {
          variant: 'error',
        });
      else
        enqueueSnackbar(COMMON_MESSAGE.UNKNOWN_ERROR, {
          variant: 'error',
        });
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    ...options,
    suspense: false,
  });
};
