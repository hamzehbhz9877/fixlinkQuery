import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteAdminUser } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { ModalBody, ModalFooter, ModalHeader } from 'Components/modal/template';
import MutationsButton from "Components/button/mutations";

interface Props {
  fullName: string;
  id: string;
  close: () => void;
}

const DeleteAminUser: FC<Props> = ({ fullName, id, close }) => {
  const remove = useMutationQuery({event:deleteAdminUser, options:{
    onSuccess: () => {
      queryClient.invalidateQueries('adminUser');
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

export default DeleteAminUser;
