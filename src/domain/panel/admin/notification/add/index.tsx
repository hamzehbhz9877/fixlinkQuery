import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import {
  initialValues,
  validationSchema,
} from 'domain/panel/admin/notification/validation';
import Input from 'Components/input/input';
import { editorConfig } from '../ckeditor/config';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fa.js';
import { queryClient } from 'Store';
import { FC } from 'react';
import Ckeditor from 'Components/ckeditor';
import '../ckeditor/index.css';
import { createNotification } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';

interface Props {
  close: () => void;
  search: string;
}

const AddNotificationsList: FC<Props> = ({ close, search }) => {
  const create = useMutationQuery<
    notifications['notifications'][0],
    notificationPost
  >(createNotification, '', {
    onError: () => {

    },
  });

  const handleSubmit = async (
    values: notificationPost,
    actions: FormikHelpers<notificationPost>
  ) => {
    actions.resetForm();
    create.restQuery.mutate(values, {
      onSuccess: (data: any) => {
        queryClient.setQueryData<notifications>(
          ['notifications', 1, search],
          (old: any) => ({
            ...old,
            notifications: [...old.notifications, data],
          })
        );
        close();
      },
    });
  };

  return (
    <>
      <h5>افزودن اطلاعیه جدید</h5>
      <Formik
        initialValues={initialValues}
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
                  onChange: (event: any, editor: any) =>
                    props.setFieldValue('text', editor.getData()),
                  data: props.values.text,
                  onBlur: () => touched(),
                }}
                type={ClassicEditor}
                config={editorConfig}
              />
              <ErrorMessage
                name="text"
                className="form--ckeditor-error"
                component="div"
              />
              <br />
              <button className="btn custom-mutate-button" type="submit">
                تایید
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AddNotificationsList;
