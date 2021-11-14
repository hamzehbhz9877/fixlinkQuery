import { ErrorMessage, useField } from 'formik';
import { DetailedHTMLProps,FC, InputHTMLAttributes } from 'react';

export type propsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends propsType {
  name: string;
  type: string;
  label: string;
  classes?: string;
}

const Input: FC<Props> = ({ label, classes, ...rest }) => {
  const [field, meta] = useField(rest);
  const error = meta.error && meta.touched;
  const success = !meta.error && meta.touched;

  return (
    <>
      <div className={`form-group ${classes ? classes : ''}`}>
        <div className="form__div">
          <input
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
export default Input;
