import { FC,DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ErrorMessage, useField } from 'formik';

type propsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends propsType {
  name: string;
  label: string;
  classes?: string;
  loadingMessage?:any
}

const WInput: FC<Props> = ({ label,loadingMessage, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  const success = !meta.error && meta.touched;
  return (
    <>
      <div className="input-group mb-5">
        <input
          {...field}
          {...props}
          className={`form-control ${error ? 'error' : ""} ${success  ? 'success': ""}`}
          placeholder={props.placeholder}
        />
        <button className="input-group-text input-group-custom"
                disabled={!!loadingMessage}>
          {loadingMessage ?? <span>{label}</span>}
        </button>
        <ErrorMessage
          name={`${props.name}`}
          className="form__error"
          component="div"
        />
      </div>
    </>
  );
};
export default WInput;
