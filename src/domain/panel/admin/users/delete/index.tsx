import { FC } from 'react';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { deleteUsers } from 'Services/shortlink';
import { queryClient } from 'Store';

interface Props {
  fullName: string;
  id: string;
  close: () => void;
  currentPage: number;
  search: string;
}

const DeleteUserList: FC<Props> = ({
  fullName,
  id,
  close,
  currentPage,
  search,
}) => {
  const remove = useMutationQuery(deleteUsers);

  const handleSubmit = () => {
    remove.restQuery.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', currentPage, search]);
        close();
      },
    });
  };

  return (
    <>
      <h5>حذف کاربر</h5>
      <p> آیا میخواهید کاربر{fullName} را حذف کنید؟ </p>
      <button className="btn custom-mutate-button" onClick={handleSubmit}>
        تایید
      </button>
    </>
  );
};

export default DeleteUserList;
