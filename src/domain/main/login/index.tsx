import { Link } from 'react-router-dom';
import { Form, Formik, FormikHelpers } from 'formik';
import Input from 'Components/input/input';
import { initialValues, validationSchema } from './validation';
import useAuth from 'Context/authentication/useAuth';
import { useHistory } from 'react-router';
import Cookie from 'universal-cookie';
import 'Assets/css/pages/main/login.css';

const Login = () => {
  const { login:{loadingMessage,restQuery} } = useAuth();
  const history = useHistory();
  const cookie = new Cookie();

  const handleSubmit = async (
    values: userPost,
    actions: FormikHelpers<userPost>
  ) => {
    actions.resetForm();
    restQuery.mutate(values, {
      onSuccess: (data: any) => {
        if (data) {
          const expire = new Date(
            data.expires_in * 1000 + new Date().getTime()
          );
          cookie.set('token', data.jwt, { expires: expire, path: '/' });
          cookie.set('user', data.userName, { expires: expire, path: '/' });
          if (data.role)
            cookie.set('Ro', data.role, { expires: expire, path: '/' });
          history.replace('/');
        }
      },
      onError: () => {},
    });
  };

  return (
    <section className="login center-content">
      <div className="card login--card card__custom">
        <div className="card__header-title">
          <h4 className="text-center">ورود به حساب کاربری</h4>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <Input name="userName" type="text" label="نام کاربری یا ایمیل" />
              <Input name="password" type="password" label="رمز عبور" />
              <div className="text-center">
                <button type="submit" className="btn__custom" disabled={!!loadingMessage}>
                  {loadingMessage?? <span>ورود</span>}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center login__account">
          <div className="login__register">
            <Link className="register" to={'/user/register'}>
              <span>ثبت نام</span>
            </Link>
          </div>
          <div className="login__forget-password">
            <span>رمز عبور خود را فراموش کردید؟</span>
            &nbsp;
            <Link to={'/user/forgetPassword'}>کلیک کنید</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
