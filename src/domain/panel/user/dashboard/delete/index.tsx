import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteLink } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';

interface Props {
  link: string;
  close: () => void;
  currentPage: number;
  searchValue: string;
}

const DeleteLink: FC<Props> = ({ link, close, searchValue, currentPage }) => {
  const remove = useMutationQuery(deleteLink,null,{
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
      <h5>حذف لینک</h5>
      <p> آیا میخواهید لینک {link} را حذف کنید؟ </p>
      <button className="btn__custom--mutate" onClick={handleSubmit}>
        تایید
      </button>
    </>
  );
};

export default DeleteLink;
