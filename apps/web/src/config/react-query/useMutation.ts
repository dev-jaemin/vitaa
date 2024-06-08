import { MutationFunction, UseMutationOptions, useMutation as _useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

interface MutationProps {
  successMessage?: string;
  successCallback?: () => void;
}

export const useMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'> | undefined,
  { successMessage, successCallback }: MutationProps = {},
) => {
  const { enqueueSnackbar } = useSnackbar();

  const mutation = _useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      if (successMessage)
        enqueueSnackbar(successMessage, {
          variant: 'success',
        });
      if (successCallback) successCallback();
    },
    ...options,
  });
  return mutation;
};
