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
import Loading from 'Components/loading';
import useAlert from 'Context/alert/useAlert';

const Main = () => {
  const history = useHistory();

  const { restQuery, loadingMessage } = useMutationQuery<
    generatorLink,
    generateLinkPost
  >(generateLink, <Loading />);

  const [show, setShow] = useState(false);

  const {addAlert} = useAlert();

  const handleSubmit = async (
    values: generateLinkPost,
    actions: FormikHelpers<generateLinkPost>
  ) => {
    actions.resetForm();
    restQuery.mutate(values, {
      onSuccess: ({ statusLink, shortLink, qr }) => {
        if (statusLink === 0 || statusLink === 1) {
          localStorage.setItem('shortLink', shortLink);
          localStorage.setItem('qr', qr);
          history.replace('/link/shortLink');
        }
        if (statusLink === 0) {
          addAlert({
            showProgress: true,
            message: 'لینک کوتاه شده آماده است',
            timeout: 5,
            type: 'success',
          });
        } else if (statusLink === 1) {
          addAlert({
            showProgress: true,
            message: 'این لینک قبلا ساخته شده است',
            timeout: 5,
            type: 'success',
          });
        } else if (statusLink === 2) {
          addAlert({
            showProgress: true,
            message: 'لینک نانعتبر است',
            timeout: 5,
            type: 'error',
          });
        } else if (statusLink === 3) {
          addAlert({
            showProgress: true,
            message: 'این لینک توسط شخص دیگری انتخاب شده است',
            timeout: 5,
            type: 'error',
          });
        } else if (statusLink === 4) {
          addAlert({
            showProgress: true,
            message: 'لینک داده شده حاوی محتوای مستهجن می باشد',
            timeout: 5,
            type: 'error',
          });
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
                loadingMessage={loadingMessage}
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
                        <div className="input-group-text home__custom-link-prepend">
                          https://Fixlink.ir/
                        </div>
                      </div>
                    </div>
                  )}
                </Field>
              )}
              {!show && (
                <div className="home__custom-link-button-wrapper">
                  <button onClick={() => setShow(true)}>
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
