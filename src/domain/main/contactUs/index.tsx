import { Form, Formik, FormikHelpers } from 'formik';
import TextArea from 'Components/input/textArea';
import Input from 'Components/input/input';
import { initialValues, validationSchema } from './validation';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { contactUs } from 'Services/shortlink';
import { useHistory } from 'react-router';
import 'Assets/css/pages/main/contactUs.css';
import Loading from "Components/loading";

const ContactUs = () => {
  const history = useHistory();
  const {loadingMessage,restQuery} = useMutationQuery<null, contactUsPost>(contactUs,<Loading/>);

  const handleSubmit = async (
    values: contactUsPost,
    actions: FormikHelpers<contactUsPost>
  ) => {
    actions.resetForm();
    restQuery.mutate(values, {
      onSuccess: () => {
        history.push('/');
      },
    });
  };

  return (
    <section className="contact-us center-content">
      <div className="card contact-us--card card__custom">
        <div className="card__header-title">
          <h5 className="text-center">تماس با ما</h5>
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
                  name="fullName"
                  classes={'col-md-6'}
                  type="text"
                  label="نام و نام خانوادگی"
                />
                <Input
                  name="email"
                  classes={'col-md-6'}
                  type="email"
                  label="ایمیل"
                />
              </div>
              <Input name="subject" type="text" label="موضوع" />
              <TextArea name="text" type="text" label="توضیحات" />
              <div className="text-center">
                <button type="submit" className="btn__custom" disabled={!!loadingMessage}>
                  {loadingMessage??<span>ثبت</span>}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactUs;
