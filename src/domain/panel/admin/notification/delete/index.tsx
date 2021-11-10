import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteNotification } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';

interface Props {
  title: string;
  id: string;
  close: () => void;
  currentPage: number;
  search: string;
}

const DeleteNotificationList: FC<Props> = ({
  id,
  title,
  close,
  currentPage,
  search,
}) => {
  const remove = useMutationQuery(deleteNotification,null,{  onSuccess: () => {
      queryClient.invalidateQueries(['notifications', currentPage, search]);
      close();
    },});

  const handleSubmit = () => {
    remove.restQuery.mutate(id);
  };

  return (
    <>
      <h5>حذف اطلاعیه</h5>
      <p> آیا میخواهید اطلاعیه {title} را حذف کنید؟ </p>
      <button className="btn btn__custom--mutate" onClick={handleSubmit}>
        تایید
      </button>
    </>
  );
};

export default DeleteNotificationList;
