import { Form, Formik } from 'formik';
import { initialValues, validationSchema } from './validation';
import Input from 'Components/input/input';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { changePasswordUsers } from 'Services/shortlink';
import { queryClient } from 'Store';
import { FC } from 'react';

interface Props {
  close: () => void;
  currentPage: number;
  search: string;
}

const EditUserList: FC<Props> = ({ currentPage, search, close }) => {
  const remove = useMutationQuery(changePasswordUsers,null,{
    onSuccess: () => {
      queryClient.invalidateQueries(['users', currentPage, search]);
      close();
    },
  });

  const handleSubmit = async (values: any, actions: any) => {
    actions.resetForm();
    remove.restQuery.mutate(values);
  };

  return (
    <>
      <h5>ویرایش رمز کاربر</h5>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <Input name="newPassword" type="password" label="رمز عبور جدید" />
              <Input
                name="confirmPassword"
                type="password"
                label="تکرار رمز عبور جدید"
              />
              <button className="btn__custom--mutate" type="submit">
                تایید
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditUserList;
