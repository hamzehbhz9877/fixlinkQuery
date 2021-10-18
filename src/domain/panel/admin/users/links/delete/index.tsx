import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteLink } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';

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
  const remove = useMutationQuery(deleteLink,null,{
    onSuccess: () => {
      queryClient.invalidateQueries([
        'userLinks',
        currentPage,
        searchValue,
        id,
      ]);
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

export default DeleteUserLinks;
