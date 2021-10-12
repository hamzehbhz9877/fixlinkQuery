import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import { ErrorMessage, useField } from 'formik';

type propsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

interface customSelectInput extends propsType {
  label: string;
  classes?: string;
  values: string[];
  name: string;
}

const CustomSelectInput: FC<customSelectInput> = ({
  label,
  classes,
  values,
  ...props
}) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  const success = !meta.error && meta.touched;

  return (
    <>
      <div className={`form-group ${classes ? classes : ''}`}>
        <label htmlFor="">{label}</label>
        <select
          {...field}
          {...props}
          placeholder="وارد کنید"
          className={`form-select form-select-lg ${error && 'error'} ${
            success && 'success'
          }`}
          aria-label=".form-select-lg example"
        >
          {!meta.initialValue && <option defaultChecked></option>}
          {values.map((value, index) => (
            <option key={index} value={index + 1}>
              {value}
            </option>
          ))}
        </select>
        <ErrorMessage
          name={`${props.name}`}
          className="form__error"
          component="div"
        />
      </div>
    </>
  );
};
export default CustomSelectInput;
