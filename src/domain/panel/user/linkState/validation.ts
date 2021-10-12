import * as Yup from 'yup';

export const initialValues = {
  searchStatistics: '',
  statistics: '0',
};

export const validationSchema = Yup.object({
  searchStatistics: Yup.string()
    .url('لینک وارد شده نامعتبر میباشد')
    .required('لطفا فیلد مورد نظر خود را را وارد کنید')
    .trim(),
});
