import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteLink } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { ModalBody, ModalFooter, ModalHeader } from 'Components/modal/template';
import MutationsButton from "Components/button/mutations";

interface Props {
  link: string;
  close: () => void;
  currentPage: number;
  searchValue: string;
  id: string;
}

const DeleteUserLinks: FC<Props> = ({
  link,
  close,
  searchValue,
  id,
  currentPage,
}) => {
  const remove = useMutationQuery({event:deleteLink,options: {
    onSuccess: () => {
      queryClient.invalidateQueries([
        'userLinks',
        currentPage,
        searchValue,
        id,
      ]);
      close();
    },
  }});

  const handleSubmit = () => {
    remove.restQuery.mutate(link);
  };

  return (
    <>
      <ModalHeader>
        <h5>حذف لینک</h5>
      </ModalHeader>
      <ModalBody>
        <p> آیا میخواهید لینک {link} را حذف کنید؟ </p>
      </ModalBody>
      <ModalFooter>
        <MutationsButton text="تایید" className="btn btn__custom--mutate" type="submit" onClick={handleSubmit}/>
      </ModalFooter>
    </>
  );
};

export default DeleteUserLinks;
