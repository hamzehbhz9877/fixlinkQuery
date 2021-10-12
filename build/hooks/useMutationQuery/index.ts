import GenericMutate from "Store/generic/genericMutation";
import {AxiosError, AxiosResponse} from "axios";
import {UseMutationOptions} from "react-query";
import useAlert from "Context/alert/useAlert";

interface Option<T, U> {
    option: UseMutationOptions<T, AxiosError, U, T>;
}

export const useMutationQuery = <T, U>(event: any, loadingMessage?: string,
                                       options?: Option<T, U>["option"]) => {

    const alert=useAlert()
    return GenericMutate<T, U>(
        {
            event: async (info: any) => {
                const {data}: AxiosResponse<Api<any>> = await event(info);
                if (data.isSuccess) {
                    alert.addAlert({
                        type: "success",
                        message: data.message,
                        timeout: 5,
                        showProgress: true
                    })
                    return data.data
                } else {
                    alert.addAlert({
                        type: "error",
                        message: data.Message,
                        timeout: 5,
                        showProgress: true
                    })
                }
            },
            loadingMessage
        }
        , {...options}
    );
}


