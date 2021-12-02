import { FC } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { validationSchema } from 'domain/panel/admin/notification/validation';
import Input from 'Components/input/input';
import Ckeditor from 'Components/ckeditor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { editorConfig } from '../ckeditor/config';
import { queryClient } from 'Store';
import { editNotification } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';
import {ModalBody, ModalHeader} from "Components/modal/template";
import MutationsButton from "Components/button/mutations";

interface Props {
  data: notificationPost;
  close: () => void;
  id: string;
  currentPage: number;
  search: string;
}

const EditNotificationList: FC<Props> = ({
  data,
  search,
  currentPage,
  close,
  id,
}) => {
  const edit = useMutationQuery<
    notifications['notifications'][0],
    notificationPost
  >({event:editNotification,options: {
    onSuccess: () => {
      queryClient.invalidateQueries(['notifications', currentPage, search]);
      close();
    },
  }});

  const handleSubmit = async (values: notificationPost) => {
    edit.restQuery.mutate({ ...values, id });
  };

  return (
    <>
      <ModalHeader>
        <h5>افزودن اطلاعیه جدید</h5>
      </ModalHeader>
      <ModalBody>
        <Formik
            initialValues={{ ...data }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
          {(props) => {
            const touched = () => {
              props.setTouched({ text: true, title: true });
            };
            return (
                <Form>
                  <Input label="عنوان" name="title" type="text" onBlur={touched} />
                  <Ckeditor
                      options={{
                        onChange: (_: any, editor: any) =>
                            props.setFieldValue('text', editor.getData()),
                        data: props.values.text,
                        onBlur: () => touched(),
                      }}
                      type={ClassicEditor}
                      config={editorConfig}
                  />
                  <span />
                  <ErrorMessage
                      name="text"
                      className="form--ckeditor-error"
                      component="div"
                  />
                  <MutationsButton text="تایید" className="btn btn__custom--mutate" type="submit"/>
                </Form>
            );
          }}
        </Formik>
      </ModalBody>
    </>
  );
};

export default EditNotificationList;
