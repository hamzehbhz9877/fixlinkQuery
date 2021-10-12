import { useState } from 'react';
import { Field, FieldMetaProps, Form, Formik, FormikHelpers } from 'formik';
import Statistics from 'domain/main/info/statistics';
import WInput from 'Components/input/cuInput';
import { initialValues, validationSchema } from './validation';
import 'Assets/css/pages/main/home.css';
import { useHistory } from 'react-router';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { generateLink } from 'Services/shortlink';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Main = () => {
  const history = useHistory();

  const { restQuery } = useMutationQuery<generatorLink, generateLinkPost>(
    generateLink
  );

  const [show, setShow] = useState(false);

  const handleSubmit = async (
    values: generateLinkPost,
    actions: FormikHelpers<generateLinkPost>
  ) => {
    actions.resetForm();
    restQuery.mutate(values, {
      onSuccess: (data) => {
        if (data.statusLink === 0 || data.statusLink === 1) {
          localStorage.setItem('shortLink', data.shortLink);
          localStorage.setItem('qr', data.qr);
          history.replace('/link/shortLink');
        }
      },
    });
  };

  return (
    <section className="home center-content">
      <div className="home__generate-link">
        <h1 className="text-center home__title">لینک خود را وارد کنید</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <WInput
                name="bigLink"
                type="url"
                label={'کوتاه کن'}
                placeholder="https://FixLink.ir/sample"
              />
              {show && (
                <Field name="shortLink">
                  {({ field }: { field: FieldMetaProps<string> }) => (
                    <div className="form-group">
                      <div className="input-group home__custom-link mx-auto">
                        <input
                          type="text"
                          placeholder="abc"
                          {...field}
                          className="form-control"
                        />
                        <div className="input-group-prepend">
                          <div className="input-group-text home__custom-link-prepend">
                            https://Fixlink.ir/
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Field>
              )}
              {!show && (
                <div className="home__custom-link-button-wrapper">
                  <button className="btn" onClick={() => setShow(true)}>
                    لینک دلخواه
                  </button>
                  <span>
                    <FaAngleDoubleDown
                      className="mt-2"
                      style={{ fontSize: '2.8rem' }}
                    />
                  </span>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <Statistics />
    </section>
  );
};

export default Main;
