import SearchBar from "Components/search";
import usePagination from "hooks/usePagination";
import useSearch from "hooks/useSearch";
import Paginate from "Components/pagination";
import Table from "Components/table/table";
import useModal from "hooks/useModal";
import Modal from "Components/modal";
import {MakePagination} from "hooks/usePagination/makePagination";
import {useParams} from "react-router-dom";
import {GetAllUserLinks} from "./services";
import DeleteUserLinks from "./delete";
import Tooltip from "Components/tooltip";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import NoInformation from "Components/noInfo";
import {FaCopy, FaTrash} from "react-icons/fa";

const UserLinks = () => {

    const {copy} = useCopyToClipboard()
    const {id}: { id: string } = useParams()
    const {searchValue, sendData} = useSearch()
    const {...rest} = usePagination()
    const {data, loadingMessage} = GetAllUserLinks({page: rest.currentPage, search: searchValue, id})
    const pages = MakePagination(rest.currentPage, data?.pages, rest.goTo)
    const {isModalOpen, handleClose, handleOpen, modalData} = useModal()

    console.log(data)

    return (
        <>
            <section>
                <SearchBar
                    description={"در این قسمت شما میتوانید جزییات دقیق  لینک های کاربری  قرار داده شده را مشاهده کنید"}
                    label={"لینک"}
                    setSearch={sendData}
                    title={"جدول لینک های کاربری"} url/>
                <div className="table-overflow">
                    <Table tableHeadingItem={["لینک اصلی", "لینک کوتاه", "تعداد بازدید", "تاریخ ساخت"
                        , "حذف"]} classes={"table__fixed"}
                           cols={<colgroup>
                               <col width="30%"/>
                               <col width="270px"/>
                               <col width="130px"/>
                               <col width="200px"/>
                               <col width="100px"/>
                           </colgroup>}
                    >
                        {loadingMessage ??
                        data?.linkForUserDto.map(({bigLink, shortLink, createAt, id, refrenceCount}, index: number) =>
                            <tr key={index}>
                                <td className="text-overflow big-link">
                                        <span>
                                               {bigLink}
                                        </span>
                                </td>
                                <td className="short-link">
                                    <Tooltip direction="right" tooltipText="کپی شد" clickable closeDelay={1000}>
                                        <button type="button"
                                                onClick={() => copy("https://fixLink.ir/" + shortLink)}
                                                className="btn custom-copy-btn">
                                            {"https://FixLink.ir/" + shortLink}
                                            &nbsp;
                                           <FaCopy/>
                                        </button>
                                    </Tooltip>
                                </td>
                                <td>{refrenceCount}</td>
                                <td>{createAt}</td>
                                <td>
                                    <button onClick={() => handleOpen(<DeleteUserLinks id={id} close={handleClose}
                                                                                       currentPage={rest.currentPage}
                                                                                       link={shortLink}
                                                                                       searchValue={searchValue}/>)}>
                                        <FaTrash className="fa-trash"/></button>
                                </td>
                            </tr>
                        )
                        }
                    </Table>
                </div>
                <NoInformation data={data?.linkForUserDto}/>
                <Paginate {...rest} pages={pages} total={data?.pages}/>
                <Modal showModal={isModalOpen} close={handleClose} children={modalData}/>
            </section>
        </>
    );
};

export default UserLinks;