import { Form, Formik, FormikHelpers } from 'formik';
import {
  initialValues,
  validationSchema,
} from 'domain/main/register/validation';
import Input from 'Components/input/input';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { addNewAdminUser } from 'Services/shortlink';
import { queryClient } from 'Store';
import { FC } from 'react';

interface Props {
  close: () => void;
}

const AddAminUser: FC<Props> = ({ close }) => {
  const register = useMutationQuery<adminUser, registerPost>(addNewAdminUser,null,{
    onSuccess: () => {
      queryClient.invalidateQueries('adminUser');
      close();
    },
  });

  const handleSubmit = async (
    values: registerPost,
    actions: FormikHelpers<registerPost>
  ) => {
    actions.resetForm();
    register.restQuery.mutate(values);
    //register
  };

  return (
    <>
      <h5>افزودن کاربر جدید</h5>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="row">
              <Input
                name="firstName"
                classes="col-md-6"
                type="text"
                label="نام "
              />
              <Input
                name="lastName"
                classes="col-md-6"
                type="text"
                label="نام خانوادگی"
              />
            </div>
            <div className="row">
              <Input
                name="userName"
                classes="col-md-6"
                type="text"
                label="نام کاربری"
              />
              <Input
                name="email"
                classes="col-md-6"
                type="email"
                label="ایمیل"
              />
            </div>
            <div className="row">
              <Input
                name="password"
                classes="col-md-6"
                type="password"
                label="رمز عبور"
              />
              <Input
                name="rePassword"
                classes="col-md-6"
                type="password"
                label="تکرار رمز عبور"
              />
            </div>
            <button type="submit" className="btn custom-mutate-button">
              ثبت نام
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAminUser;
