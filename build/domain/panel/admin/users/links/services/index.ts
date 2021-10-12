import {useGetQuery} from "hooks/useGetQuery";
import {getAllLinkForUser} from "Services/shortlink";

export const GetAllUserLinks = ({page, search,id}: pagination&{id:string}) =>
    useGetQuery<userLinks>(getAllLinkForUser, {
            loadingMessage: "در حال دریافت لینک های کاربر ...",
            queryKey: ["userLinks", page, search,id]
        },
        {page, search,id},
        {keepPreviousData: true})