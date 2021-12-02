import { FC } from 'react';
import { queryClient } from 'Store';
import { deleteContactUs } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import MutationsButton from "Components/button/mutations";

interface Props {
  subject: string;
  id: string;
  currentPage: number;
  close: () => void;
}

const DeleteContactUs: FC<Props> = ({ subject, id, currentPage, close }) => {
  const remove = useMutationQuery({event:deleteContactUs,options:{
    onSuccess: () => {
      queryClient.invalidateQueries(['contactUs', currentPage, '']);
      close();
    },
  }});

  const handleSubmit = () => {
    remove.restQuery.mutate(id);
  };

  return (
    <>
      <ModalHeader>
        <h5>حذف پیام</h5>
      </ModalHeader>
     <ModalBody>
       <p> آیا میخواهید پیغام {subject} را حذف کنید؟ </p>

     </ModalBody>
      <ModalFooter>
        <MutationsButton text="تایید" className="btn btn__custom--mutate" type="submit" onClick={handleSubmit}/>

      </ModalFooter>
    </>
  );
};

export default DeleteContactUs;
