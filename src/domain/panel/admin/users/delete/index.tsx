import { FC } from 'react';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { deleteUsers } from 'Services/shortlink';
import { queryClient } from 'Store';
import { ModalBody, ModalFooter, ModalHeader } from 'Components/modal/template';
import MutationsButton from "Components/button/mutations";

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
  const remove = useMutationQuery({event:deleteUsers, options:{
    onSuccess: () => {
      queryClient.invalidateQueries(['users', currentPage, search]);
      close();
    },
  }});

  const handleSubmit = () => {
    remove.restQuery.mutate(id);
  };

  return (
    <>
      <ModalHeader>
        <h5>حذف کاربر</h5>
      </ModalHeader>
      <ModalBody>
        <p> آیا میخواهید کاربر{fullName} را حذف کنید؟ </p>
      </ModalBody>
      <ModalFooter>
        <MutationsButton text="تایید" className="btn btn__custom--mutate" type="submit" onClick={handleSubmit}/>

      </ModalFooter>
    </>
  );
};

export default DeleteUserList;
