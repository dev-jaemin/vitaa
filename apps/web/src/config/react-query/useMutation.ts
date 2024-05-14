import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { MutationFunction, UseMutationOptions, useMutation as _useMutation } from 'react-query';
import { COMMON_MESSAGE } from '../../constants/SnackbarMessage';

export const useMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'> | undefined,
  errorMessage?: string,
) => {
  const { enqueueSnackbar } = useSnackbar();

  const mutation = _useMutation(mutationFn, {
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
    ...options,
  });
  return mutation;
};
