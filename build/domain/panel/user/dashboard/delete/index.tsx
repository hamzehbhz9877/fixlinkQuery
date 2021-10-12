import {FC} from 'react';
import {queryClient} from "Store";
import {deleteLink} from "Services/shortlink";
import {useMutationQuery} from "hooks/useMutationQuery";

interface Props {
    link: string,
    close:()=>void,
    currentPage:number,
    searchValue:string
}


const DeleteLink: FC<Props> = ({link,close,searchValue,currentPage}) => {

    const remove=useMutationQuery(deleteLink)

    const handleSubmit = () => {
        remove.restQuery.mutate(link,{
            onSuccess:()=>{
                queryClient.invalidateQueries(["links",currentPage,searchValue])
                close()
            }
        })
    }

    return (
        <>
            <h5>حذف لینک</h5>
            <p> آیا میخواهید لینک {link} را حذف کنید؟ </p>
            <button className="btn custom-mutate-button" onClick={handleSubmit}>تایید</button>
        </>
    );
};

export default DeleteLink;