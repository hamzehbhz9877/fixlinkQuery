import GenericQuery from "Store/generic/genericQuery";
import {AxiosError, AxiosResponse} from "axios";
import {QueryFunctionContext, QueryKey, UseQueryOptions} from "react-query";
import useAlert from "Context/alert/useAlert";

interface Option<T> {
    option: UseQueryOptions<T, AxiosError, T, QueryKey>;
}
interface Event<T>{
    queryKey:string | unknown[],
    queryFn?: (context: QueryFunctionContext) => Promise<T>,
    loadingMessage?:string
}

export const useGetQuery = <T>(event: any,eventOption:Event<T>, values?: any, options?:
    Option<T>["option"]
) =>
{
    const alert=useAlert()
   return GenericQuery<T>(
        {
            ...eventOption,
            event: async () => {
                const {data}: AxiosResponse<Api<any>> = await event(values);
                if (data.isSuccess) {
                    return data.data
                } else {
                    console.log(data)
                    alert.addAlert({
                        showProgress:true,
                        message:data.Message??"لینک ای پی ای ها رو بررسی کن همچین لینکی توی سرور نیست",
                        timeout:5,
                        type:"error"
                    })
                }
            }
        }, {...options}
    )

}

