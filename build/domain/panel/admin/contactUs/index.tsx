import Table from "Components/table/table";
import SearchBar from "Components/search";
import useSearch from "hooks/useSearch";
import usePagination from "hooks/usePagination";
import {GetContactUs} from "./services";
import Paginate from "Components/pagination";
import Modal from "Components/modal";
import useModal from "hooks/useModal";
import DeleteContactUs from "./delete";
import ShowContactUs from "./show";
import {MakePagination} from "hooks/usePagination/makePagination";
import NoInformation from "Components/noInfo";
import {FaEye, FaTrash} from "react-icons/fa";

const ContactUsPanel = () => {

    const {searchValue, sendData} = useSearch()
    const {...rest} = usePagination()
    const {data, loadingMessage} = GetContactUs({page:rest.currentPage, search:searchValue})
    const pages=MakePagination(rest.currentPage, data?.pages, rest.goTo)
    const {isModalOpen, handleClose, handleOpen, modalData} = useModal()

    return (
        <>
            <section className="dashboard-table">
                <SearchBar description={"در این قسمت شما میتوانید جزییات دقیق پیام های قرار داده شده را مشاهده کنید"}
                           label={"کاربر"}
                           setSearch={sendData}
                           title={"جدول پیام ها"}/>
                <Table tableHeadingItem={["نام کاربری", "نام و نام خانوادگی", "ایمیل",
                    "موضوع", "تاریخ", "متن", "نمایش", "حذف"]}>
                    {
                        data?.contactUs.map(({
                                                                   createAtPersian,
                                                                   id,
                                                                   fullName,
                                                                   email,
                                                                   userName,
                                                                   text,
                                                                   subject
                                                               }, index: number) =>
                            <tr key={index}>
                                <td>{userName}</td>
                                <td>{fullName}</td>
                                <td>{email}</td>
                                <td>{subject}</td>
                                <td>{createAtPersian}</td>
                                <td>
                                    {text}
                                </td>
                                <td>
                                    <button
                                            onClick={() => handleOpen(<ShowContactUs close={handleClose}
                                                                                     data={{
                                                                                         userName,
                                                                                         fullName,
                                                                                         email,
                                                                                         subject,
                                                                                         text
                                                                                     }}/>)}>
                                       <FaEye/>
                                    </button>
                                </td>
                                <td>
                                    <button
                                            onClick={() => handleOpen(<DeleteContactUs close={handleClose}
                                                                                       currentPage={rest.currentPage}
                                                                                       subject={subject}
                                                                                       id={id}/>)}>
                                        <FaTrash className="fa-trash"/>
                                    </button>
                                </td>
                            </tr>
                        )}
                </Table>
                {loadingMessage}
                <NoInformation data={data?.contactUs}/>
                <Paginate {...rest} pages={pages} total={data?.pages}/>
                <Modal showModal={isModalOpen} close={handleClose} children={modalData}/>
            </section>
        </>
    );
};
export default ContactUsPanel;