import { useHistory, useParams } from 'react-router';
import { Form, Formik, FormikHelpers } from 'formik';
import Input from 'Components/input/input';
import { initialValues, validationSchema } from './validation';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { submitForgetPassword } from 'Services/shortlink';
import 'Assets/css/pages/main/submitPassword.css';

const SubmitForgetPassword = () => {
  const history = useHistory();

  const { token }: { token: string } = useParams();

  const submit = useMutationQuery<null, submitPassword & { token: string }>(
    submitForgetPassword
  );

  const handleSubmit = async (
    values: submitPassword,
    actions: FormikHelpers<submitPassword>
  ) => {
    actions.resetForm();
    submit.restQuery.mutate(
      { ...values, token },
      {
        onSuccess: () => {
          history.replace('/user/login');
        },
      }
    );
  };

  return (
    <section className="submit-password center-content">
      <div className="card submit-password--card custom--card">
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
                <Input name="newPassword" type="password" label="رمز عبور" />
                <Input
                  name="confirmPassword"
                  type="password"
                  label="تکرار رمز عبور"
                />
                <div className="text-center">
                  <button type="submit" className="btn custom-btn">
                    ورود
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

export default SubmitForgetPassword;
