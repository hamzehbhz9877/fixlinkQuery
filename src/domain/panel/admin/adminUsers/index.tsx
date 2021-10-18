import useModal from 'hooks/useModal';
import Table from 'Components/table/table';
import Modal from 'Components/modal';
import DeleteAminUser from './delete';
import { NavLink, useRouteMatch } from 'react-router-dom';
import AddAminUser from './add';
import { deActiveAdminUser, getAllAdminUser } from 'Services/shortlink';
import { queryClient } from 'Store';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { useGetQuery } from 'hooks/useGetQuery';
import { FaTrash } from 'react-icons/fa';

const AdminList = () => {
  const { data, loadingMessage } = useGetQuery<adminUser[]>(getAllAdminUser, {
    loadingMessage: 'در حال دریافت مدیران ...',
    queryKey: 'adminUser',
  });

  const { isModalOpen, handleClose, handleOpen, modalData, options } =
    useModal();

  const toggle = useMutationQuery(deActiveAdminUser);

  const handleDeActive = (id: string) => {
    toggle.restQuery.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries('adminUser');
      },
    });
  };

  return (
    <>
      <h5>لیست کاربران مدیر</h5>
      <section>
        <button
          className="btn__custom--mutate"
          onClick={() =>
            handleOpen(<AddAminUser close={handleClose} />, {
              style: { content: { width: '600px' } },
            })
          }
        >
          افزودن کاربر جدید
        </button>
        <Table
          tableHeadingItem={[
            'نام کاربری',
            'نام و نام خانوادگی',
            'تعداد لینک ها',
            'تاریخ',
            'وضعیت',
            'حذف',
          ]}
        >
          {data?.map(
            (
              {
                isActive,
                countLink,
                userName,
                email,
                fullName,
                id,
                createAtPersian,
              },
              index: number
            ) => (
              <tr key={index}>
                <td>{userName}</td>
                <td>{fullName}</td>
                <td>{countLink}</td>
                <td>{createAtPersian}</td>
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
                        <DeleteAminUser
                          close={handleClose}
                          fullName={fullName}
                          id={id}
                        />
                      )
                    }
                  >
                    <FaTrash className="fa-trash" />
                  </button>
                </td>
              </tr>
            )
          )}
        </Table>
        {loadingMessage}
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
export default AdminList;
