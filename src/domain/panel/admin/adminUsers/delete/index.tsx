import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteAdminUser } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';

interface Props {
  fullName: string;
  id: string;
  close: () => void;
}

const DeleteAminUser: FC<Props> = ({ fullName, id, close }) => {
  const remove = useMutationQuery(deleteAdminUser, '', {
    onSuccess: () => {
      queryClient.invalidateQueries('adminUser');
      close();
    },
  });

  const handleSubmit = () => {
    remove.restQuery.mutate(id);
  };

  return (
    <>
      <h5>حذف کاربر</h5>
      <p> آیا میخواهید کاربر{fullName} را حذف کنید؟ </p>
      <button className="btn btn__custom--mutate" onClick={handleSubmit}>
        تایید
      </button>
    </>
  );
};

export default DeleteAminUser;
