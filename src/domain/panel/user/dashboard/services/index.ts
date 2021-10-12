import {useGetQuery} from "hooks/useGetQuery";
import {getAllLink} from "Services/shortlink";

export const GetAllLink = ({page, search}: pagination) =>
    useGetQuery<links>(getAllLink, {loadingMessage: "در حال دریافت لینک ها ...",
        queryKey: ["links", page, search]}, {page, search}, {keepPreviousData: true})