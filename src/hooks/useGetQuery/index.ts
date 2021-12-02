import GenericQuery from 'Store/generic/genericQuery';
import { AxiosError, AxiosResponse } from 'axios';
import { QueryFunctionContext, QueryKey, UseQueryOptions } from 'react-query';
import { CancelToken } from 'Services/httpService';
import useAlert from 'Context/alert/useAlert';

interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}

interface Option<T> {
  option: UseQueryOptions<T, AxiosError, T, QueryKey>;
}

interface Event<T> {
  queryKey: string | unknown[];
  queryFn?: (context: QueryFunctionContext) => Promise<T>;
  loadingMessage?: any;
}

function isAbortError(error: any): error is DOMException {
  if (error && error.name === 'AbortError') {
    return true;
  }
  return false;
}

interface GetQuery<T> {
  event: any;
  eventOption: Event<T>;
  values?: any;
  options?: Option<T>['option'];
}

export const useGetQuery = <T>({
  event,
  eventOption,
  values,
  options,
}: GetQuery<T>) => {
  const { addAlert } = useAlert();

  return GenericQuery<T>(
    {
      ...eventOption,
      event: () => {
        const source = CancelToken();

        const promise: any = new Promise(async (resolve, reject) => {
          try {
            const { data }: AxiosResponse<Api<any>> = await event(values);
            if (data.isSuccess) {
              resolve(data.data);
            } else {
              addAlert({
                showProgress: true,
                message:
                  data.Message ??
                  'لینک ای پی ای ها رو بررسی کن همچین لینکی توی سرور نیست',
                timeout: 5,
                type: 'error',
              });
            }
          } catch (ex: unknown) {
            if (isAbortError(ex)) {
              reject(new Error('Request cancelled'));
            }
          }
        });

        promise.cancel = () => {
          source.cancel();
        };

        return promise as PromiseWithCancel<any>;
      },
    },
    {
      ...options,
    }
  );
};
