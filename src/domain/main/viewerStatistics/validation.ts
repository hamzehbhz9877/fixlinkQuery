import * as Yup from 'yup';

const initialValues = {
  viewerLink: '',
};

const validationSchema = Yup.object({
  viewerLink: Yup.string()
    .url('لینک وارد شده نامعتبر میباشد')
    .required('لطفا لینک کوتاه خود را وارد کنید')
    .trim(),
});

export { initialValues, validationSchema };
