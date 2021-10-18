import { FC } from 'react';
import { propsType } from 'Components/input/input';

interface Props extends propsType {
  label: any;
}

const SimpleInput: FC<Props> = ({ label, ...rest }) => {
  return (
    <div className="form-group">
      <div className="form__div">
        <input {...rest} className="form__input" placeholder="وارد کنید" />
        <label htmlFor="" className="form__label">
          {label}
        </label>
      </div>
    </div>
  );
};

export default SimpleInput;
