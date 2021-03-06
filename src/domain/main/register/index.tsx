import { Link } from 'react-router-dom';
import Input from 'Components/input/input';
import { initialValues, validationSchema } from './validation';
import { Form, Formik, FormikHelpers } from 'formik';
import 'Assets/css/pages/main/register.css';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { register } from 'Services/shortlink';
import Loading from "Components/loading";

const Register = () => {
  const {restQuery,loadingMessage} = useMutationQuery<null, registerPost>({event:register,
    loadingMessage:<Loading/>
});

  const handleSubmit = async (
    values: registerPost,
    actions: FormikHelpers<registerPost>
  ) => {
    actions.resetForm();
   restQuery.mutate(values);
  };

  return (
    <section className="register center-content">
      <div className="card register--card card__custom">
        <div className="card__header-title">
          <h4 className="text-center">ثبت نام</h4>
        </div>
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
              <div className="text-center">
                <button type="submit" className="btn__custom" disabled={!!loadingMessage}>
                  {loadingMessage??<span>ثبت نام</span>}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="register__have-account text-center">
          <span>آیا قبلا ثبت نام کرده اید؟</span>
          &nbsp;
          <Link to={'/user/login'}>وارد شوید</Link>
        </div>
      </div>
    </section>
  );
};
export default Register;
