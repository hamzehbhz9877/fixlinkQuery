import {useGetQuery} from "hooks/useGetQuery";
import {getAllUser} from "Services/shortlink";

export const GetAllUser = ({page, search}: pagination) =>
    useGetQuery<users>(getAllUser, {
            loadingMessage: "در حال دریافت کاربر ها ...",
            queryKey: ["users", page, search]
        },
        {page, search},
        {keepPreviousData: true})