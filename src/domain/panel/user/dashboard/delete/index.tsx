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
}

const DeleteLink: FC<Props> = ({ link, close, searchValue, currentPage }) => {
  const remove = useMutationQuery(deleteLink, null, {
    onSuccess: () => {
      queryClient.invalidateQueries(['links', currentPage, searchValue]);
      close();
    },
  });

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

export default DeleteLink;
