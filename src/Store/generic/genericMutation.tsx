import React from 'react';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';

interface Props {
  event: any;
  loadingMessage?: string;
}

interface Option<T, U> {
  option: UseMutationOptions<T, AxiosError, U, T>;
}

const GenericMutate = <T, U>(
  { event, loadingMessage }: Props,
  option?: Option<T, U>['option']
) => {
  const { isLoading, isError, data, error, ...restQuery } = useMutation<
    T,
    AxiosError,
    U,
    T
  >((data: U) => event(data), {
    ...option,
  });

  if (loadingMessage) {
    if (isLoading) {
      return {
        restQuery,
        loadingMessage: <div className="loadingMessage">{loadingMessage}</div>,
      };
    }

    if (isError) {
      return {
        restQuery,
        errorMessage: (
          <div className="errorMessage">Error: {error?.message}</div>
        ),
      };
    }
  }

  return { restQuery, data };
};

export default GenericMutate;
