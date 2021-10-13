import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

interface Props {
  event: Function;
  queryKey: QueryKey;
  loadingMessage?: any;
}

interface Option<T> {
  option: UseQueryOptions<T, AxiosError, T, QueryKey>;
}

const GenericQuery = <T extends {}>(
  { event, queryKey, loadingMessage }: Props,
  option?: Option<T>['option']
) => {
  const { isLoading, isError, data, error, ...restQuery } = useQuery<
    T,
    AxiosError,
    T,
    QueryKey
  >({
    queryKey: queryKey,
    queryFn: ({ queryKey }) => event(queryKey),
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

export default GenericQuery;
