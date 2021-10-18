import React, { FC } from 'react';
import SimpleInput from 'Components/input/simple';

interface Props {
  data: {
    userName: string;
    fullName: string;
    email: string;
    subject: string;
    text: string;
  };
  close: () => void;
}

const ShowContactUs: FC<Props> = ({ data, close }) => {
  return (
    <>
      <h5>مشاهده پیام</h5>
      <SimpleInput
        name="fullName"
        value={data.fullName}
        type="text"
        label="نام و نام خانوادگی"
        readOnly
      />
      <SimpleInput
        name="email"
        value={data.email}
        type="email"
        label="ایمیل"
        readOnly
      />
      <SimpleInput
        name="subject"
        value={data.subject}
        type="text"
        label="موضوع"
        readOnly
      />
      <SimpleInput
        name="text"
        value={data.text}
        type="text"
        label="توضیحات"
        readOnly
      />
      <button
        className="btn__custom--mutate"
        type="submit"
        onClick={close}
      >
        بستن
      </button>
    </>
  );
};

export default ShowContactUs;
