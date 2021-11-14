import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import { ErrorMessage, useField } from 'formik';

type propsType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

interface textArea extends propsType {
  label: string;
  classes?: string;
  name: string;
  type: string;
}

const TextArea: FC<textArea> = ({ label, classes, ...rest }) => {
  const [field, meta] = useField(rest);
  const error = meta.error && meta.touched;
  const success = !meta.error && meta.touched;

  return (
    <>
      <div className={`form-group ${classes ? classes : ''}`}>
        <div className="form__div form__cnu">
          <textarea
            {...field}
            {...rest}
            className={`form__input ${error ? 'error' : ""} ${
              success ? 'success' : ""
            }`}
            placeholder="وارد کنید"
          />
          <label htmlFor="" className="form__label">
            {label}
          </label>
        </div>
        <ErrorMessage
          name={`${rest.name}`}
          className="form__error"
          component="div"
        />
      </div>
    </>
  );
};
export default TextArea;
