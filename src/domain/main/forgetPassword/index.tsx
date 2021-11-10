import { Form, Formik, FormikHelpers } from 'formik';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { validationSchema, initialValues } from './validation';
import Input from 'Components/input/input';
import { forgetPassword } from 'Services/shortlink';
import 'Assets/css/pages/main/forgetPassword.css';
import Loading from "Components/loading";

const ForgetPassword = () => {
  const {restQuery,loadingMessage} = useMutationQuery<null, forgetPassword>(forgetPassword,<Loading/>);

  const handleSubmit = async (
    values: forgetPassword,
    actions: FormikHelpers<forgetPassword>
  ) => {
    actions.resetForm();
    restQuery.mutate(values);
  };

  return (
    <section className="forget-password center-content">
      <div className="card forget-password--card card__custom">
        <div className="card__header-title">
          <h4 className="text-center">تغییر رمز عبور</h4>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => {
            return (
              <Form>
                <Input name="email" type="email" label="ایمیل" />
                <div className="text-center">
                  <button type="submit" className="btn__custom" disabled={!!loadingMessage}>
                    {loadingMessage??<span>تایید</span>}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default ForgetPassword;
