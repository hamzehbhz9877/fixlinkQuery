import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteNotification } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { ModalBody, ModalFooter, ModalHeader } from 'Components/modal/template';
import MutationsButton from 'Components/button/mutations';

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
  const remove = useMutationQuery({event:deleteNotification,options: {
    onSuccess: () => {
      queryClient.invalidateQueries(['notifications', currentPage, search]);
      close();
    },
  }});

  const handleSubmit = () => {
    remove.restQuery.mutate(id);
  };

  return (
    <>
      <ModalHeader>
        <h5>حذف اطلاعیه</h5>
      </ModalHeader>
      <ModalBody>
        <p> آیا میخواهید اطلاعیه {title} را حذف کنید؟ </p>
      </ModalBody>
      <ModalFooter>
        <MutationsButton
          text="تایید"
          className="btn btn__custom--mutate"
          type="submit"
          onClick={handleSubmit}
        />
      </ModalFooter>
    </>
  );
};

export default DeleteNotificationList;
