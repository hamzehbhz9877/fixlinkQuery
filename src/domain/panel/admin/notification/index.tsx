import Table from 'Components/table/table';
import useSearch from 'hooks/useSearch';
import useModal from 'hooks/useModal';
import Paginate from 'Components/pagination';
import Modal from 'Components/modal';
import SearchBar from 'Components/search';
import AddNotificationsList from './add';
import DeleteNotificationList from './delete';
import EditNotificationList from 'domain/panel/admin/notification/edit';
import { MakePagination } from 'hooks/usePagination/makePagination';
import usePagination from 'hooks/usePagination';
import { GetNotification } from 'domain/main/notification/services';
import NoInformation from 'Components/noInfo';
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./ckeditor/index.css"

const Post = () => {
  const { searchValue, sendData } = useSearch();
  const { ...rest } = usePagination();
  const { data, loadingMessage } = GetNotification({
    page: rest.currentPage,
    search: searchValue,
  });
  const pages = MakePagination(rest.currentPage, data?.pages, rest.goTo);
  const { isModalOpen, handleClose, handleOpen, modalData, options } =
    useModal();

  return (
    <>
      <section>
        <SearchBar
          description={
            'در این قسمت شما میتوانید جزییات دقیق اطلاعیه های قرار داده شده را مشاهده کنید'
          }
          label={'اطلاعیه'}
          setSearch={sendData}
          title={'جدول اطلاعیه ها'}
        />
        <button
          className="btn custom-mutate-button"
          onClick={() =>
            handleOpen(
              <AddNotificationsList search={searchValue} close={handleClose} />,
              {
                style: { content: { width: 'mex-content' } },
              }
            )
          }
        >
          افزودن اطلاعیه جدید
        </button>

        <Table tableHeadingItem={['عنوان', 'تاریخ', 'حذف', 'ویرایش']}>
          {data?.notifications.map(
            ({ text, title, id, createAtPersian }, index: number) => (
              <tr key={index}>
                <td>{title}</td>
                <td>{createAtPersian}</td>
                <td>
                  <button
                    onClick={() =>
                      handleOpen(
                        <DeleteNotificationList
                          search={searchValue}
                          currentPage={rest.currentPage}
                          close={handleClose}
                          title={title}
                          id={id}
                        />
                      )
                    }
                  >
                    <FaTrash className="fa-trash" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleOpen(
                        <EditNotificationList
                          search={searchValue}
                          currentPage={rest.currentPage}
                          close={handleClose}
                          data={{ text, title }}
                          id={id}
                        />,
                        { style: { content: { width: 'mex-content' } } }
                      )
                    }
                  >
                    <FaEdit className="fa-edit" />
                  </button>
                </td>
              </tr>
            )
          )}
        </Table>
        {loadingMessage}
        <NoInformation data={data?.notifications} />
        <Paginate {...rest} pages={pages} total={data?.pages} />
        <Modal
          options={options}
          showModal={isModalOpen}
          close={handleClose}
          children={modalData}
        />
      </section>
    </>
  );
};

export default Post;
