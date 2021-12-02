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
import { createNotification } from 'Services/shortlink';
import { useMutationQuery } from 'hooks/useMutationQuery';
import {ModalBody, ModalHeader} from "Components/modal/template";
import MutationsButton from "Components/button/mutations";

interface Props {
  close: () => void;
  search: string;
}

const AddNotificationsList: FC<Props> = ({ close, search }) => {
  const create = useMutationQuery<
    notifications['notifications'][0],
    notificationPost
  >({event:createNotification,options: {
    onError: () => {},
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
  }});

  const handleSubmit = async (
    values: notificationPost,
    actions: FormikHelpers<notificationPost>
  ) => {
    actions.resetForm();
    create.restQuery.mutate(values);
  };

  return (
    <>
        <ModalHeader>
            <h5>افزودن اطلاعیه جدید</h5>

        </ModalHeader>
        <ModalBody>
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
                                    onChange: (_: any, editor: any) =>
                                        props.setFieldValue('text', editor.getData()),
                                    data: props.values.text,
                                    onBlur: () => touched(),
                                }}
                                type={ClassicEditor}
                                config={editorConfig}
                            />
                            <div />
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

export default AddNotificationsList;
