import { useHistory } from 'react-router';
import { Form, Formik, FormikHelpers } from 'formik';
import { initialValues, validationSchema } from './validation';
import { useMutationQuery } from 'hooks/useMutationQuery';
import Input from 'Components/input/input';
import { changePassword } from 'Services/shortlink';
import 'Assets/css/pages/panel/common/changePassword.css';

const ChangePassword = () => {
  const history = useHistory();

  const user = useMutationQuery<null, changePassword>(changePassword);

  const handleSubmit = async (
    values: changePassword,
    actions: FormikHelpers<changePassword>
  ) => {
    user.restQuery.mutate(values, {
      onSuccess: () => {
        actions.resetForm();
        history.replace('/');
      },
    });
  };

  return (
    <section className="change-password center-content">
      <div>
        <div className="text-center">
          <h5>تغییر رمز عبور</h5>
          <p>
            در این قسمت شما میتوانید رمز عبور خود را در صورت نیاز تغییر دهید
          </p>
        </div>
        <div className="card change-password--card card__custom">
          <div className="card__header-title">
            <h4 className="text-center">تغییر رمز</h4>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => {
              return (
                <Form>
                  <Input name="oldPassword" type="password" label="رمز فعلی" />
                  <Input
                    name="newPassword"
                    type="password"
                    label="رمز عبور جدید"
                  />
                  <Input
                    name="confirmPassword"
                    type="password"
                    label="تکرار رمز عبور جدید"
                  />
                  <div className="text-center">
                    <button type="submit" className="btn__custom">
                      ثبت
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
