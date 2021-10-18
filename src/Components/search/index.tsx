import { FC } from 'react';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ClearSearch from 'Components/search/clearSearch';

interface Props {
  title: string;
  description: string;
  setSearch: (data: any) => void;
  label: string;
  url?: boolean;
  userPanelQrCode?: boolean;
}

const SearchBar: FC<Props> = ({
  title,
  description,
  setSearch,
  label,
  url,
  userPanelQrCode,
}) => {
  const initialValues = {
    search: '',
  };

  const validationSchema = Yup.object({
    search: url
      ? Yup.string()
          .url('لینک وارد شده نامعتبر میباشد')
          .required('لطفا لینک کوتاه خود را را وارد کنید')
          .trim()
      : Yup.string().required('لطفا فیلد مورد نظر خود را را وارد کنید').trim(),
  });

  const handleSubmit = async (values: { search: string }) => {
    if (url) {
      const data = {
        search: values.search.split('.ir/')[1],
      };
      setSearch(data.search);
    } else {
      setSearch(values.search);
    }
  };

  return (
    <div className="search">
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className="card search__filter">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <Field name="search">
                {({ field, form: { handleReset }, meta }: FieldProps) => (
                  <>
                    <div className="d-flex search__filter-wrapper">
                      <div className="form__div">
                        {meta.value && (
                          <ClearSearch
                            clearSearch={setSearch}
                            reset={handleReset}
                          />
                        )}
                        <input
                          type={url ? 'url' : 'text'}
                          className={`form__input search__padding-btn ${
                            url && 's-left'
                          }
                                                            ${
                                                              meta.error &&
                                                              meta.touched
                                                                ? 'error'
                                                                : ''
                                                            } 
                                                            ${
                                                              meta.touched &&
                                                              !meta.error
                                                                ? 'success'
                                                                : ''
                                                            }`}
                          placeholder=" "
                          {...field}
                        />
                        <label htmlFor="" className="form__label">
                          {label}
                        </label>
                        <ErrorMessage
                          name="search"
                          className="form__error"
                          component="div"
                        />
                      </div>
                      <div className="search__btn">
                        <button type="submit">
                          جستجو
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchBar;
