import SearchBar from 'Components/search';
import usePagination from 'hooks/usePagination';
import useSearch from 'hooks/useSearch';
import Paginate from 'Components/pagination';
import Table from 'Components/table/table';
import useModal from 'hooks/useModal';
import Modal from 'Components/modal';
import EditUserList from './edit';
import DeleteUserList from './delete';
import { MakePagination } from 'hooks/usePagination/makePagination';
import { GetAllUser } from 'domain/panel/admin/users/services';
import { queryClient } from 'Store';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { deActiveUsers } from 'Services/shortlink';
import { NavLink, useRouteMatch } from 'react-router-dom';
import NoInformation from 'Components/noInfo';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const UserList = () => {
  let { url } = useRouteMatch();
  const { searchValue, sendData } = useSearch();
  const { ...rest } = usePagination();
  const { data, loadingMessage } = GetAllUser({
    page: rest.currentPage,
    search: searchValue,
  });
  const pages = MakePagination(rest.currentPage, data?.pages, rest.goTo);
  const { isModalOpen, handleClose, handleOpen, modalData } = useModal();

  const toggle = useMutationQuery(deActiveUsers);

  const handleDeActive = (id: string) => {
    toggle.restQuery.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', rest.currentPage, searchValue]);
      },
    });
  };

  return (
    <>
      <section>
        <SearchBar
          description={
            'در این قسمت شما میتوانید جزییات دقیق کاربر های قرار داده شده را مشاهده کنید'
          }
          label={'کاربر'}
          setSearch={sendData}
          title={'جدول کاربر ها'}
        />
        <div className="table-overflow">
          <Table
            tableHeadingItem={[
              'نام کاربری',
              'نام و نام خانوادگی',
              'ایمیل',
              'تعداد لینک ها',
              'تاریخ',
              'بررسی وضعیت لینک ها',
              'وضعیت',
              'حذف',
              'ویرایش رمز',
            ]}
          >
            {data?.userResponseDto.map(
              (
                {
                  createAtPersian,
                  id,
                  fullName,
                  email,
                  userName,
                  countLink,
                  isActive,
                },
                index: number
              ) => (
                <tr key={index}>
                  <td>{userName}</td>
                  <td>{fullName}</td>
                  <td>{email}</td>
                  <td>{countLink}</td>
                  <td>{createAtPersian}</td>
                  <td>
                    <NavLink to={`${url + '/' + id}`}>
                      <FaEye className="fa-eye" />
                    </NavLink>
                  </td>
                  <td>
                    <label className="switch">
                      <input
                        id={id}
                        onClick={() => handleDeActive(id)}
                        type="checkbox"
                        defaultChecked={isActive}
                      />
                      <span className="switch__slider switch--round" />
                    </label>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleOpen(
                          <DeleteUserList
                            search={searchValue}
                            currentPage={rest.currentPage}
                            close={handleClose}
                            id={id}
                            fullName={fullName}
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
                          <EditUserList
                            search={searchValue}
                            currentPage={rest.currentPage}
                            close={handleClose}
                          />
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
        </div>
        {loadingMessage}
        <NoInformation data={data?.userResponseDto} />
        <Paginate {...rest} pages={pages} total={data?.pages} />
        <Modal
          showModal={isModalOpen}
          close={handleClose}
          children={modalData}
        />
      </section>
    </>
  );
};

export default UserList;
