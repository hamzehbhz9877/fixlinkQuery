import {FC} from 'react';
import {queryClient} from "Store";
import {deleteContactUs} from "Services/shortlink";
import {useMutationQuery} from "hooks/useMutationQuery";

interface Props {
    subject: string,
    id: string,
    currentPage:number,
    close:()=>void
}

const DeleteContactUs: FC<Props> = ({subject, id,currentPage,close}) => {


    const remove=useMutationQuery(deleteContactUs)
    const handleSubmit = () => {
       remove.restQuery.mutate(id,{
           onSuccess:()=>{
               queryClient.invalidateQueries(["contactUs", currentPage, ""])
               close()
           }
       })
    }

    return (
        <>
            <h5>حذف پیام</h5>
            <p> آیا میخواهید پیغام {subject} را حذف کنید؟ </p>
            <button className="btn custom-mutate-button" onClick={handleSubmit}>تایید</button>
        </>
    );
};

export default DeleteContactUs;