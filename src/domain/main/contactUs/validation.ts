import * as Yup from 'yup';

const initialValues = {
  fullName: '',
  email: '',
  subject: '',
  text: '',
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'نام و خانوادگی باید حداقل حاوی سه کاراکتر باشد')
    .required('لطفا نام و نام خانوادگی خود را وارد کنید')
    .trim(),
  email: Yup.string()
    .email('ایمیل وارد شده نامعتبر میباشد')
    .required('لطفا ایمل خود را وارد کنید')
    .trim(),
  subject: Yup.string()
    .min(3, 'موضوع باید حداقل حاوی سه کاراکتر باشد')
    .required('لطفا موضوع خود را وارد کنید')
    .trim(),
  text: Yup.string().required('لطفا توضیحات خود را وارد کنید').trim(),
});

export { initialValues, validationSchema };
