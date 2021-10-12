import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import TextArea from 'Components/input/textArea';
import Input from 'Components/input/input';
import { initialValues, validationSchema } from './validation';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { contactUs } from 'Services/shortlink';
import { useHistory } from 'react-router';
import 'Assets/css/pages/main/contactUs.css';

const ContactUs = () => {
  const history = useHistory();
  const contact = useMutationQuery<null, contactUsPost>(contactUs);

  const handleSubmit = async (
    values: contactUsPost,
    actions: FormikHelpers<contactUsPost>
  ) => {
    actions.resetForm();
    contact.restQuery.mutate(values, {
      onSuccess: () => {
        history.push('/');
      },
    });
  };

  return (
    <section className="contact-us center-content">
      <div className="card contact-us--card custom--card">
        <div className="card__header-title">
          <h4 className="text-center">تماس با ما</h4>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className="form-row">
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
                <button type="submit" className="btn custom-btn">
                  ثبت
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
