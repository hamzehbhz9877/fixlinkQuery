import GenericMutate from 'Store/generic/genericMutation';
import { AxiosError, AxiosResponse } from 'axios';
import { UseMutationOptions } from 'react-query';
import useAlert from 'Context/alert/useAlert';

interface Option<T, U> {
  option: UseMutationOptions<T, AxiosError, U, T>;
}

interface MutationQuery<T,U> {
  event: any, loadingMessage?: any, options?: Option<T, U>['option']
}

export const useMutationQuery = <T, U>
({event, loadingMessage, options}:MutationQuery<T,U>) => {
  const {addAlert} = useAlert();
  return GenericMutate<T, U>(
    {
      event: async (info: any) => {
        const { data }: AxiosResponse<Api<any>> = await event(info);
        if (data.isSuccess) {
          addAlert({
            type: 'success',
            message: data.message,
            timeout: 5,
            showProgress: true,
          });
          return data.data;
        } else {
          addAlert({
            type: 'error',
            message: data.Message,
            timeout: 5,
            showProgress: true,
          });
        }
      },
      loadingMessage,
    },
    { ...options }
  );
};
